import CartActionTypes from './CartType';
import {addItemToCart, removeItemFromCart} from './CartUtility';
const Initial_State = {
    hidden:'true',
    cartItems: []
};

const cardReducer = (state = Initial_State , action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems , action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
                return{
                    ...state,
                    cartItems:removeItemFromCart(state.cartItems , action.payload)
                }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
}
export default cardReducer;