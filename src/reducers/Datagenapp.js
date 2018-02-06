import { combineReducers } from 'redux';
import form from './form';
import result from './result';

let datagenApp = combineReducers({
    form,
    result
});

export default datagenApp