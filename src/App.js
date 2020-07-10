import React from 'react';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';

import Header from './Components/Header/Header';
import SignIn_SignUp from './pages/SignIn-SignUp/SignIn_SignUp';
import { auth } from './firebase/firebaseutil';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth  = null
  componentDidMount(){
    this.unsubscribeFromAuth =auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        {/* <HomePage /> */}
        <Header currentUser={this.state.currentUser} />
        <Switch>

          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signIn' component={SignIn_SignUp} />
        </Switch>

      </div>
    );
  }
}



export default App;
