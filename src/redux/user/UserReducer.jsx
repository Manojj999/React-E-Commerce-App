import {UserActionTypes} from './UserTypes'


// for the firstTime when the state is not changed
const Initial_State = {
    currentUser:null
}


const UserReducer = (state = Initial_State,action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            };            
        default:
            return state;
    }
}

export default UserReducer
