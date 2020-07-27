import React from 'react';
import CustomButton from '../Custom-Button/CustomButton';
import { toggleCartHidden } from '../../redux/cart/CartAction';
import './CartDropDown.scss';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/CartSelector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'


const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?

                    (cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )))
                    :
                    (<span className="empty-message">Your Cart Is Empty</span>)

            }
        </div>
        <CustomButton onClick={
            () => {
                history.push('/checkout');
                dispatch(toggleCartHidden());

            }} >Go to CheckOut</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropDown))
