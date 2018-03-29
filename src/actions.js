    import fetch from 'cross-fetch'

 export const FORM_LOADING = 'FORM_LOADING';
 export const FORM_LOADED_SUCCESS = 'FORM_LOADED_SUCCESS';
 export const FORM_LOADED_FAILURE = 'FORM_LOADED_FAILURE';
 export const FORM_ADD_ROW = 'FORM_ADD_ROW';
 export const FORM_ROW_TYPE_CHANGED = 'FORM_ROW_TYPE_CHANGED';

 export function startLoadForm() {
     return { type: FORM_LOADING }
 }

 export const endLoadForm = function(data) {
     return {
         type: FORM_LOADED_SUCCESS,
         data: data
     }
 };

export const changeRowType = function(rowId, fieldTypeValue) {
    return {
        type: FORM_ROW_TYPE_CHANGED,
        rowId: rowId,
        fieldTypeValue: fieldTypeValue
    }
};

 export const addFormRow = function(criteria) {
     return {
         type: FORM_ADD_ROW,
         criteria: criteria
     }
 };

// Async actions
export const getFormData = () => {
    return (dispatch) => {
        dispatch(startLoadForm());

        // TODO put URL in somewhere better

        // return fetch('http://randomdata.info:8081/api/fields')
        return fetch('http://192.168.33.10:8081/api/fields')
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(endLoadForm(json)))
    }
}