import {FORM_ADD_ROW, FORM_LOADED_SUCCESS, FORM_LOADING, FORM_ROW_TYPE_CHANGED} from "../actions";

const initialState =  {
    loaded: false,
    loading: false,
    data: [],
    criteria: [{id: 1}]
};

function form(state = initialState, action) {
    switch (action.type) {
        case FORM_LOADING:
            return {
                ...state,
                loaded: false,
                loading: true
            };
        case FORM_LOADED_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                data: action.data
            };
        case FORM_ADD_ROW:
            let newId = getBiggestCriteriaId(state)+1;
            return {
                ...state,
                criteria: [...state.criteria, { id: newId }]
            };
        case FORM_ROW_TYPE_CHANGED:
            debugger;
            // let criteria = [...state.criteria];
            let newCriteria = Object.assign({}, state.criteria);
            let i = getCriteriaIndexById(newCriteria, action.id);

            newCriteria[i].type = action.value;

            return {
                ...state,
                criteria: newCriteria
            };

        default:
            return state;
    }
}

/**
 * Get largest criteria id in state, or 1 if no criteria.
 *
 * @param state
 * @returns {number}
 */
export const getBiggestCriteriaId = function(state) {
    let maxId = 1;
    for (let i in state.criteria) {
        if (state.criteria.hasOwnProperty(i) && state.criteria[i].id > maxId) {
            maxId = state.criteria[i].id;
        }
    }
    return maxId;
}

/**
 * Get array index of criteria of given id, or null if not found.
 *
 * @param criteriaList
 * @param id
 * @returns {*}
 */
export const getCriteriaIndexById = function(criteriaList, id) {
    for (let i in criteriaList) {
        if (criteriaList.hasOwnProperty(i) && criteriaList[i].id === id) {
            return i;
        }
    }
    return null;
}

export default form;