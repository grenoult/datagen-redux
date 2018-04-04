// import {FORM_LOADING} from "../actions";

import {RESULT_LOADING} from "../actions";

const initialState =  {
    loaded: false,
    loading: false,
    data: [],
};

function result(state = initialState, action) {
    switch (action.type) {
        case RESULT_LOADING:
            return {
                ...state,
                loaded: false,
                loading: true
            };
        default:
            return state;
    }
}

export default result;