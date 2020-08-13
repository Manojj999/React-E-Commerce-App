import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector } from 'reselect';
import {auth} from '../../firebase/firebaseutil';
import {ReactComponent as Logo} from '../../Assests/crown.svg';
import CartIcon from '../CartIcon/CartIcon'; 
import CartDropDown from '../CartDropDown/CartDropDown';
import {selectCartHidden} from '../../redux/cart/CartSelector';
import {selectCurrentUser} from '../../redux/user/UserSelector';

import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink } from './HeaderStyles';
function Header({currentUser,hidden}) {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    Shop   
                </OptionLink>
                <OptionLink to="/shop">
                    Contact  
                </OptionLink>
                {
                    currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>
                    :
                    <OptionLink   to="/signin">Sign In</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null :
            <CartDropDown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps  = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header)
