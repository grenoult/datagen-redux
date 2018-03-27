import {FORM_ADD_ROW, FORM_LOADED_SUCCESS, FORM_LOADING} from "../actions";

const initialState =  {
    loaded: false,
    loading: false,
    data: [],
    criteria: [{}]
};

function form(state = initialState, action) {
    switch (action.type) {
        case FORM_LOADING:
            return {
                ...state,
                loaded: false,
                loading: true
            };
        case FORM_LOADED_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                data: action.data
            };
        case FORM_ADD_ROW:
            return {
                ...state,
                criteria: [{ text: Date.now() }, ...state.criteria]
            };

        default:
            return state;
    }
}

export default form;