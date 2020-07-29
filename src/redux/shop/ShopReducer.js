import Shop_Data from './Shop_Data';

const INITIAL_STATE = {
    collections:Shop_Data
}



const ShopReducer = (state=INITIAL_STATE ,action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default ShopReducer;
