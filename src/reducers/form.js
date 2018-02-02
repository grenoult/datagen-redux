import {FORM_LOADED, FORM_LOADING} from "../actions";

const initialState =  {
    loaded: false,
    loading: false,
    data: []
};

function form(state = initialState, action) {
    // console.log('FormReducer!');
    // console.log(state);


    switch (action.type) {
        case FORM_LOADING:
            return Object.assign({}, state,{
                loading: true
            });
        case FORM_LOADED:
            return Object.assign({}, state,{
                loaded: true
            });

        default:
            return state;
    }
}

export default form;