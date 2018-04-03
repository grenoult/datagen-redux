import {
    FORM_ADD_ROW,
    FORM_LOADED_SUCCESS,
    FORM_LOADING,
    FORM_ROW_NAME_CHANGED,
    FORM_ROW_SUBTYPE_CHANGED,
    FORM_ROW_TEXTINPUT_CHANGED,
    FORM_ROW_TYPE_CHANGED,
    FORM_ROW_REMOVED
} from "../actions";

const initialState =  {
    loaded: false,
    loading: false,
    data: [],
    criteria: []
};

function form(state = initialState, action) {
    let newCriteria, i, newCriteriaRow;
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
            newCriteria = {id: newId, type: 0};
            return {
                ...state,
                criteria: [...state.criteria, newCriteria]
            };
        case FORM_ROW_TYPE_CHANGED:
            newCriteria = [...state.criteria]; // Clone array of criteria
            i = newCriteria.findIndex(newCriteriaRow => newCriteriaRow.id === action.id); // get array index
            newCriteriaRow = Object.assign({}, state.criteria[i]); // Clone criteria object

            // Update values
            newCriteriaRow.type = action.value;
            newCriteria[i] = newCriteriaRow;

            // Remove subtype, if any
            if (newCriteriaRow.subtype) {
                delete newCriteriaRow.subtype;
            }

            // Remove textinput, if any
            if (newCriteriaRow.textinput) {
                delete newCriteriaRow.textinput;
            }

            return {
                ...state,
                criteria: newCriteria
            };
        case FORM_ROW_SUBTYPE_CHANGED:
            newCriteria = [...state.criteria]; // Clone array of criteria
            i = newCriteria.findIndex(newCriteriaRow => newCriteriaRow.id === action.id); // get array index
            newCriteriaRow = Object.assign({}, state.criteria[i]); // Clone criteria object

            // Update values
            newCriteriaRow.subtype = action.value;
            newCriteria[i] = newCriteriaRow;

            return {
                ...state,
                criteria: newCriteria
            };
        case FORM_ROW_TEXTINPUT_CHANGED:
            newCriteria = [...state.criteria]; // Clone array of criteria
            i = newCriteria.findIndex(newCriteriaRow => newCriteriaRow.id === action.id); // get array index
            newCriteriaRow = Object.assign({}, state.criteria[i]); // Clone criteria object

            // Update values
            newCriteriaRow.textinput = action.value;
            newCriteria[i] = newCriteriaRow;

            return {
                ...state,
                criteria: newCriteria
            };
        case FORM_ROW_NAME_CHANGED:
            newCriteria = [...state.criteria]; // Clone array of criteria
            i = newCriteria.findIndex(newCriteriaRow => newCriteriaRow.id === action.id); // get array index
            newCriteriaRow = Object.assign({}, state.criteria[i]); // Clone criteria object

            // Update values
            newCriteriaRow.name = action.value;
            newCriteria[i] = newCriteriaRow;

            return {
                ...state,
                criteria: newCriteria
            };
        case FORM_ROW_REMOVED:
            newCriteria = [...state.criteria].filter(function(row) {
                console.log(row.id !== this);
                return row.id !== this;
            }, action.id);

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
    let maxId = 0;
    for (let i in state.criteria) {
        if (state.criteria.hasOwnProperty(i) && state.criteria[i].id > maxId) {
            maxId = state.criteria[i].id;
        }
    }
    return maxId;
};

export default form;