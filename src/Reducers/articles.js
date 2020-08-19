import { GETARTICLES } from "../Action/Constants"

const Initial_state = {
    articles_data: []
};

export default (state= Initial_state,action) => {
    switch (action.type) {
        case GETARTICLES: {
            return{
                ...state,
                articles_data: action.payload
            };
        }
        default:
            return state;

    }
}
