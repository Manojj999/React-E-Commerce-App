import React from 'react';
import CustomButton from '../Custom-Button/CustomButton';
import './CartDropDown.scss';

const CartDropDown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButton>Go to CheckOut</CustomButton>
        </div>
    </div>
)

export default CartDropDown
