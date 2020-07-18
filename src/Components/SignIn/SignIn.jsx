import React from "react";
import "./SignIn.scss";
import FormInput from '../Form-Input/FormInput';
import CustomButton from '../Custom-Button/CustomButton';
import {auth ,signInwithGoogle} from '../../firebase/firebaseutil';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handledSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    

    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({email:'',password:''})

    }catch(error){
      console.log(error);
    }
    this.setState({ email: '', password: '' });

  }

  handledChange = (event) => {
    const{name,value} = event.target;
    this.setState({[name]:value})
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already Have an Account</h2>
        <span>Sign In With Email and Password</span>
        <form onSubmit={this.handledSubmit}>
          <FormInput type="email" label="Email" name="email" handledChange={this.handledChange} value={this.state.email} required />
        
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handledChange={this.handledChange}
            label="Password"
            required
          />
          <div className="buttons">

          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInwithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
