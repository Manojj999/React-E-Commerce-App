import React from 'react';
import CustomButton from '../Custom-Button/CustomButton';
import './CartDropDown.scss';
import CartItem from '../CartItem/CartItem';
import {connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/CartSelector';

const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
            
            }
        </div>
            <CustomButton>Go to CheckOut</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropDown)
