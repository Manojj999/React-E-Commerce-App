import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import {ReactComponent as Logo} from '../../Assests/crown.svg';
function Header() {
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
            </div>
        </div>
    )
}

export default Header
