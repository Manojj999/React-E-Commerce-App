import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {auth} from '../../firebase/firebaseutil';
import {ReactComponent as Logo} from '../../Assests/crown.svg';
import CartIcon from '../CartIcon/CartIcon'; 
import CartDropDown from '../CartDropDown/CartDropDown';
import {selectCartHidden} from '../../redux/cart/CartSelector';
import {selectCurrentUser} from '../../redux/user/UserSelector';


function Header({currentUser,hidden}) {
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
                <CartIcon />
            </div>
            {
                hidden ? null :
            <CartDropDown />
            }
        </div>
    )
}

const mapStateToProps  = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header)
