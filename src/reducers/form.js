import {FORM_LOADING} from "../actions";

const initialState =  {
    // form: {
        loaded: false,
        loading: false,
        data: []
    // },
    // result: {
    //     loaded: false,
    //     loading: false,
    //     data: []
    // }
};

function form(state = initialState, action) {
    // Somehow calculate it...
    console.log('FormReducer!');
    console.log(state);
    // console.log(action);


    switch (action.type) {
        case FORM_LOADING:
            var newState = Object.assign({}, state);
            newState.loading = true;
            return newState;
        // return Object.assign({}, state, {
        //     loading: true
        // });
        // state.form.loading = true;
        // console.log('State updated');
        // console.log(state);
        // return state;

        default:
            return state;
    }
}

export default form;