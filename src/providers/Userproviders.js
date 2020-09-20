import React, { Component, createContext } from 'react';
import { auth, createOrGetUserProfileDocument } from '../firebase';

const initialUserState = { user: null, loading: false };
export const UserContext = createContext(initialUserState);

class Userproviders extends Component {
  state = initialUserState;

  async componentDidMount() {
    //Will be fired whenever you go from logged in to logged out
    auth.onAuthStateChanged(async (userAuth) => {
      console.log('UserProvider -> componentDidMount -> userAuth');
      if (userAuth) {
        const userRef = await createOrGetUserProfileDocument(userAuth);
        console.log('userRef', userRef);
        userRef.onSnapshot((snapshot) => {
          console.log('snapshot', snapshot);
          console.log('snapshot data', snapshot.data());
          this.setState({
            user: { uid: snapshot.id, ...snapshot.data() },
          });
        });
      }
    });
  }
  render() {
    console.log('this.props', this.props);
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default Userproviders;
