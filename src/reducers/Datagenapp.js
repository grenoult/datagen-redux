import { combineReducers } from 'redux';
import { FORM_LOADING, FORM_LOADED } from '../actions';
import form from './form';
import result from './result';

const initialState =  {
    form: {
        loaded: false,
        loading: false,
        data: []
    },
    result: {
        loaded: false,
        loading: false,
        data: []
    }
};



let datagenApp = combineReducers({
    form,
    result
});

export default datagenApp