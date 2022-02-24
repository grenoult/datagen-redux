import fetch from 'cross-fetch'
import {startGeneratingData, endGeneratingData} from './result'

export const FORM_LOADING = 'FORM_LOADING';
export const FORM_LOADED_SUCCESS = 'FORM_LOADED_SUCCESS';
export const FORM_LOADED_FAILURE = 'FORM_LOADED_FAILURE';
export const FORM_ADD_ROW = 'FORM_ADD_ROW';
export const FORM_ROW_TYPE_CHANGED = 'FORM_ROW_TYPE_CHANGED';
export const FORM_ROW_SUBTYPE_CHANGED = 'FORM_ROW_SUBTYPE_CHANGED';
export const FORM_ROW_TEXTINPUT_CHANGED = 'FORM_ROW_TEXTINPUT_CHANGED';
export const FORM_ROW_NAME_CHANGED = 'FORM_ROW_NAME_CHANGED';
export const FORM_ROW_REMOVED = 'FORM_ROW_REMOVED';
export const FORM_NB_RECORDS_CHANGED = 'FORM_NB_RECORDS_CHANGED';
export const FORM_RESULT_TYPE_CHANGED = 'FORM_RESULT_TYPE_CHANGED';
export const FORM_LOAD_SAMPLE = 'FORM_LOAD_SAMPLE';

const baseUrl = 'http://randomdata.info:8081';
// const baseUrl = 'http://192.168.33.10';

export function startLoadForm() {
    return { type: FORM_LOADING }
}

export const endLoadFormSuccess = function(data) {
    return {
        type: FORM_LOADED_SUCCESS,
        data: data
    }
};

export const endLoadFormFailure = function(data) {
    return {
        type: FORM_LOADED_FAILURE,
        data: data
    }
};

export const changeRowType = function(rowId, value) {
    return {
        type: FORM_ROW_TYPE_CHANGED,
        id: rowId,
        value: value
    }
};

export const changeRowSubType = function(rowId, value) {
    return {
        type: FORM_ROW_SUBTYPE_CHANGED,
        id: rowId,
        value: value
    }
};

export const changeRowTextInput = function(rowId, value) {
    return {
        type: FORM_ROW_TEXTINPUT_CHANGED,
        id: rowId,
        value: value
    }
};

export const changeRowName = function(rowId, value) {
    return {
        type: FORM_ROW_NAME_CHANGED,
        id: rowId,
        value: value
    }
};

export const addFormRow = function() {
    return {
        type: FORM_ADD_ROW
    }
};

export const removeFormRow = function(rowId) {
    return {
        type: FORM_ROW_REMOVED,
        id: rowId
    }
};

export const changeNbRecordsNumber = function(value) {
    return {
        type: FORM_NB_RECORDS_CHANGED,
        value: value
    }
};

export const changeResultType = function(value) {
    return {
        type: FORM_RESULT_TYPE_CHANGED,
        value: value
    }
};

export const loadSample = function (value) {
    return {
        type: FORM_LOAD_SAMPLE
    }
};

// Async actions
export const getFormData = () => {
    return (dispatch) => {
        dispatch(startLoadForm());

        return fetch(baseUrl+'/api/v2/fields')
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(json => {
                return [dispatch(endLoadFormSuccess(json)), dispatch(addFormRow())]
            })
            .catch(err => {
                return dispatch(endLoadFormFailure(err.message))
            });
    }
};

export const getResultFromForm = (criteriaList, nbRecords) => {
    return (dispatch) => {
        dispatch(startGeneratingData());

        console.log({ "fields": criteriaList, "records": nbRecords });

        return fetch(baseUrl+'/api/v2/generate', {
            method: 'POST',
            body: JSON.stringify({fields: criteriaList, records: nbRecords}),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => {return dispatch(endGeneratingData(json))})
    }
};

export const getResultFromScript = (sqlScript, nbRecords) => {
    return (dispatch) => {
        dispatch(startGeneratingData());

        return fetch(baseUrl+'api/v2/generate-from-script', {
            method: 'POST',
            body: JSON.stringify({sqlScript: sqlScript, records: nbRecords}),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => {return dispatch(endGeneratingData(json))})
    }
};