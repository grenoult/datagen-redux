/*
 * action types
 */

 export const FORM_LOADING = 'FORM_LOADING';
 export const FORM_LOADED = 'FORM_LOADED';

 export function startLoadForm() {
     return { type: FORM_LOADING }
 }

 export function endLoadForm() {
     return { type: FORM_LOADED }
 }

 /*

 {
    formLoaded: false,
    resultLoaded: false,
    formData: [],
    resultData: []
 }


 */