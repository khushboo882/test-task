import { GETFRIENDS } from "../Action/Constants"

const initialState = {
    friends_data: []
};
export default (state= initialState,action)=>{
    switch (action.type) {
        case GETFRIENDS:{
            return{
                ...state,
                friends_data: action.payload
            };
        }
        default:
            return state;

    }
}
