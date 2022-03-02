import {
    RESULT_LOADING, 
    RESULT_LOADED,
    RESULT_RESET
} from "../actions/result";

const initialState =  {
    loaded: false,
    loading: false,
    data: null,
};

function result(state = initialState, action) {
    switch (action.type) {
        case RESULT_LOADING:
            return {
                ...state,
                loaded: false,
                loading: true,
                data: null
            };
        case RESULT_LOADED:
            return {
                ...state,
                loaded: true,
                loading: false,
                data: action.value
            };
        case RESULT_RESET:
            return {
                ...state,
                loaded: false,
                loading: false,
                data: null
            }
        default:
            return state;
    }
}

export default result;