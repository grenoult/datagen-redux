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
        case FORM_ADD_ROW:
            state.criteria.push({ text: Date.now() });
            return Object.assign({}, state,{
                criteria: state.criteria
            });

        default:
            return state;
    }
}

export default form;