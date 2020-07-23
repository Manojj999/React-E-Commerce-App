import React from 'react';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import {connect} from 'react-redux';
import Header from './Components/Header/Header';
import SignIn_SignUp from './pages/SignIn-SignUp/SignIn_SignUp';
import { auth ,createUserProfileDocument} from './firebase/firebaseutil';
import { setCurrentUser } from './redux/user/UserAction';

class App extends React.Component {
  
  

  unsubscribeFromAuth  = null
  componentDidMount(){

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>  {
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
          })
          // console.log(this.state);
        
        
      }
      setCurrentUser(userAuth)

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        {/* <HomePage /> */}
        <Header />
        <Switch>

          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signIn' component={SignIn_SignUp} />
        </Switch>

      </div>
    );
  }
}

const MapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

// here in connect pass null=> because here dont require currentUser
export default connect(null,MapDispatchToProps)(App);
