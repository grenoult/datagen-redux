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

export const startGeneratingData = function() {
    return {
        type: RESULT_LOADING
    }
};

export const endGeneratingData = function() {
    return {
        type: RESULT_LOADED
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

export const getResult = () => {
    return (dispatch) => {
        dispatch(startGeneratingData());

        let data = {
            query: "{\"queryFields\":[{\"name\":\"id\",\"typeId\":\"1\",\"type\":\"integer\",\"subtype\":\"increment\"},{\"name\":\"firstname\",\"typeId\":\"5\",\"type\":\"firstname\",\"subtype\":\"both\"},{\"name\":\"lastname\",\"typeId\":\"6\",\"type\":\"surname\",\"subtype\":\"\"},{\"name\":\"stnum\",\"typeId\":\"11\",\"type\":\"street Number\",\"subtype\":\"\"},{\"name\":\"stname\",\"typeId\":\"10\",\"type\":\"street\",\"subtype\":\"\"},{\"name\":\"state\",\"typeId\":\"9\",\"type\":\"state\",\"subtype\":\"\"},{\"name\":\"zip\",\"typeId\":\"8\",\"type\":\"postcode\",\"subtype\":\"\"},{\"name\":\"city\",\"typeId\":\"7\",\"type\":\"city\",\"subtype\":\"\"},{\"name\":\"phone\",\"typeId\":\"4\",\"type\":\"phone\",\"subtype\":\"us\"},{\"name\":\"startdate\",\"typeId\":\"3\",\"type\":\"date\",\"subtype\":\"past\"},{\"name\":\"creditcard\",\"typeId\":\"2\",\"type\":\"regex\",\"subtype\":\"^4[0-9]12(?:[0-9]3)?$\"}],\"records\":\"10\"}"
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