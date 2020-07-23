import CartActionTypes from './CartType';

const Initial_State = {
    hidden:'true'
};

const cardReducer = (state = Initial_State , action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        default:
            return state;
    }
}
export default cardReducer;