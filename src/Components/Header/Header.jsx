import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import {connect} from 'react-redux'
import {auth} from '../../firebase/firebaseutil';
import {ReactComponent as Logo} from '../../Assests/crown.svg';
function Header({currentUser}) {
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    shop   
                </Link>
                <Link className="option" to="/shop">
                    Contact  
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className="option" to="/signin">Sign In</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser:state.user.currentUser
})
export default connect(mapStateToProps)(Header)
