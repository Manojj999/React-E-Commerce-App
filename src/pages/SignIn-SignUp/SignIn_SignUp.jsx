import React from 'react';
import './SignIn-SignUp.scss';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';
function SignIn_SignUp() {
    return (
    <div className="signIn-signUp">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignIn_SignUp
