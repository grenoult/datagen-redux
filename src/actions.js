import fetch from 'cross-fetch'

 export const FORM_LOADING = 'FORM_LOADING';
 export const FORM_LOADED_SUCCESS = 'FORM_LOADED_SUCCESS';
 export const FORM_LOADED_FAILURE = 'FORM_LOADED_FAILURE';
 export const FORM_ADD_ROW = 'FORM_ADD_ROW';
 export const FORM_ROW_TYPE_CHANGED = 'FORM_ROW_TYPE_CHANGED';
 export const FORM_ROW_SUBTYPE_CHANGED = 'FORM_ROW_SUBTYPE_CHANGED';
 export const FORM_ROW_TEXTINPUT_CHANGED = 'FORM_ROW_TEXTINPUT_CHANGED';
 export const FORM_ROW_NAME_CHANGED = 'FORM_ROW_NAME_CHANGED';
 export const FORM_ROW_REMOVED = 'FORM_ROW_REMOVED';
 export const RESULT_LOADING = 'RESULT_LOADING';
 export const RESULT_LOADED = 'RESULT_LOADED';
 export const FORM_NB_RECORDS_CHANGED = 'FORM_NB_RECORDS_CHANGED';

export function startLoadForm() {
    return { type: FORM_LOADING }
}

export const endLoadForm = function(data) {
    return {
        type: FORM_LOADED_SUCCESS,
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

export const startGeneratingData = function() {
    return {
        type: RESULT_LOADING
    }
};

export const endGeneratingData = function(value) {
    return {
        type: RESULT_LOADED,
        value: value
    }
};

// Async actions
export const getFormData = () => {
    return (dispatch) => {
        dispatch(startLoadForm());

        return fetch('http://randomdata.info:8081/api/fields')
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => {return [dispatch(endLoadForm(json)), dispatch(addFormRow())]})
    }
};

export const getResult = (criteriaList) => {
    return (dispatch) => {
        dispatch(startGeneratingData());

        let data = {
            query: JSON.stringify({"queryFields": criteriaList, "records":"10"})
        };

        return fetch('http://randomdata.info:8081/api/generate', {
            method: 'POST',
            body: JSON.stringify(data),
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