import {FORM_LOADED_SUCCESS, FORM_LOADING} from "../actions";

const initialState =  {
    loaded: false,
    loading: false,
    data: []
};

function form(state = initialState, action) {
    switch (action.type) {
        case FORM_LOADING:
            return Object.assign({}, state,{
                loaded: false,
                loading: true
            });
        case FORM_LOADED_SUCCESS:
            return Object.assign({}, state,{
                loaded: true,
                loading: false,
                data: action.data
            });

        default:
            return state;
    }
}

export default form;