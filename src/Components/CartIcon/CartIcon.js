import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/CartAction';
import { selectCartItemsCount} from '../../redux/cart/CartSelector';

import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../Assests/shopping-bag.svg';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)


const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);