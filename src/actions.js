    import fetch from 'cross-fetch'

 export const FORM_LOADING = 'FORM_LOADING';
 export const FORM_LOADED_SUCCESS = 'FORM_LOADED_SUCCESS';
 export const FORM_LOADED_FAILURE = 'FORM_LOADED_FAILURE';

 export function startLoadForm() {
     return { type: FORM_LOADING }
 }

 export const endLoadForm = function(data) {
     return {
         type: FORM_LOADED_SUCCESS,
         data: data
     }
 };


// Async actions
export const getFormData = () => {
    return (dispatch) => {
        dispatch(startLoadForm());

        // TODO put URL in somewhere better

        return fetch('http://randomdata.info:8081/api/fields')
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(endLoadForm(json)))
    }
}