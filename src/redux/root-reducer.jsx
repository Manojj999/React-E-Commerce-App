import {combineReducers} from 'redux';
import UserReducer from './user/UserReducer';
import CardReducer from './cart/CartReducer';


export default combineReducers({
    user:UserReducer,
    cart:CardReducer,

})