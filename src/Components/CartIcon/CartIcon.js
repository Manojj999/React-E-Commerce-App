 import React from 'react';
 import {connect} from 'react-redux';
 import {toggleCartHidden} from '../../redux/cart/CartAction';

 import './CartIcon.scss';
 import {ReactComponent as ShoppingIcon } from '../../Assests/shopping-bag.svg';


 const CartIcon  = ({toggleCartHidden}) => (
     <div className="cart-icon" onClick={toggleCartHidden}>
         <ShoppingIcon className="shopping-icon"/>
         <span className="item-count">0</span>
     </div>
 )


 const mapDispatchToProps = (dispatch) => ({
     toggleCartHidden: () => dispatch(toggleCartHidden())
 })
 export default connect(null ,mapDispatchToProps)(CartIcon);