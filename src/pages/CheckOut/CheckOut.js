import React from 'react';
import './CheckOut.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/CartSelector';
import CheckOutItem from '../../Components/CheckOutItem/CheckoutItem';
import StripeButton from '../../Components/Stripe_Button/StripeButton';


function CheckOut({ cartItems, total }) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(
                   cartItem =>
                        (<CheckOutItem key={cartItem.id} cartItem={cartItem} />))
            }
            <div className="total">
                <span>Total: ${total}</span>
            </div>
            <div className="test-warning">
                *please Use following Test Credit card for PayMent*
                <br />
                4242 4242 4242 4242 -exp: 01/21 -cvv:123

            </div>
                <StripeButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOut)