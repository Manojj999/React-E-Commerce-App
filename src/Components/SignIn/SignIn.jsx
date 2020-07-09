import React from "react";
import "./SignIn.scss";
import FormInput from '../Form-Input/FormInput';
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handledSubmit = (event) => {
    event.preventDefault();
    this.setState({email:'',password:''})
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
          <FormInput type="email" label="email" name="email" handledChange={this.handledChange} value={this.state.email} required />
        
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handledChange={this.handledChange}
            label="password"
            required
          />
          
          <FormInput type="submit" value="Submit the Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
