import React, { Component, createContext } from 'react';
import { auth, createOrGetUserProfileDocument } from '../firebase';

const initialUserState = { user: null, loading: true };
export const UserContext = createContext(initialUserState);

class Userproviders extends Component {
  state = initialUserState;

  async componentDidMount() {
    //Will be fired whenever you go from logged in to logged out
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log('UserProvider -> componentDidMount -> userAuth');
      if (userAuth) {
        const userRef = await createOrGetUserProfileDocument(userAuth);

        // Attach listener to listen to user changes in firestore
        console.log('userRef', userRef);
        userRef.onSnapshot((snapshot) => {
          console.log('snapshot', snapshot);
          console.log('snapshot data', snapshot.data());
          this.setState({
            user: { uid: snapshot.id, ...snapshot.data() },
            loading: false,
          });
        });
      }
      this.setState({ user: userAuth, loading: false });
    });
  }
  render() {
    console.log('this.props', this.props);
    const { user, loading } = this.state;
    const { children } = this.props;
    return (
      <UserContext.Provider value={{ user, loading }}>
        {children}
      </UserContext.Provider>
    );
  }
}

export default Userproviders;
