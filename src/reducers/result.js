import {RESULT_LOADING, RESULT_LOADED} from "../actions";

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
        default:
            return state;
    }
}

export default result;