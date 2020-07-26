import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import { connect } from 'react-redux';
import Header from './Components/Header/Header';
import SignInSignUp from './pages/SignIn-SignUp/SignInSignUp';
import CheckOut from './pages/CheckOut/CheckOut';


import { auth, createUserProfileDocument } from './firebase/firebaseutil';
import { setCurrentUser } from './redux/user/UserAction';
import { selectCurrentUser} from './redux/user/UserSelector';
import  { createStructuredSelector} from 'reselect';



class App extends React.Component {



  unsubscribeFromAuth = null
  componentDidMount() {

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
        // console.log(this.state);


      }
      setCurrentUser(userAuth)

    })
  }

  componentWillUnmount() {
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
          <Route exact path='/checkout' component={CheckOut} />
          <Route
            exact
            path='/signIn'
            render={() =>
              this.props.currentUser ?
                (
                  <Redirect to='/' />
                ) :
                (
                  <SignInSignUp />
                )
            } />
        </Switch>

      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const MapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// here in connect pass null=> because here dont require currentUser
export default connect(mapStateToProps, MapDispatchToProps)(App);
