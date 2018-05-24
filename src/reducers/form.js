import {
    FORM_ADD_ROW,
    FORM_LOADED_SUCCESS,
    FORM_LOADING,
    FORM_ROW_NAME_CHANGED,
    FORM_ROW_SUBTYPE_CHANGED,
    FORM_ROW_TEXTINPUT_CHANGED,
    FORM_ROW_TYPE_CHANGED,
    FORM_ROW_REMOVED,
    FORM_NB_RECORDS_CHANGED,
    FORM_RESULT_TYPE_CHANGED,
    FORM_LOAD_SAMPLE
} from "../actions";

const initialState =  {
    loaded: false,
    loading: false,
    data: [],
    criteria: [],
    nbRecords: 10,
    resultType: 'html'
};

function form(state = initialState, action) {
    let newCriteria, newCriteriaRow;
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
            let type = state.data[0].name;
            newCriteria = {id: newId, type: type};

            if (state.data[0].options && state.data[0].options.options) {
                newCriteria.subtype = Object.keys(state.data[0].options.options)[0];
            }

            return {
                ...state,
                criteria: [...state.criteria, newCriteria]
            };
        case FORM_ROW_TYPE_CHANGED:
            newCriteria = [...state.criteria]; // Clone array of criteria
            let i = newCriteria.findIndex(newCriteriaRow => newCriteriaRow.id === action.id); // get array index
            newCriteriaRow = Object.assign({}, state.criteria[i]); // Clone criteria object

            // Update values
            newCriteriaRow.type = action.value;

            // Remove or add subtype, if any
            if (newCriteriaRow.subtype) {
                delete newCriteriaRow.subtype;
            }

            i = 0;
            while (state.data[i] && state.data[i].name !== newCriteriaRow.type) {
                i++;
            }

            if (state.data[i] && state.data[i].options && state.data[i].options.options) {
                newCriteriaRow.subtype = Object.keys(state.data[i].options.options)[0];
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
                return row.id !== this;
            }, action.id);

            return {
                ...state,
                criteria: newCriteria
            };

        case FORM_NB_RECORDS_CHANGED:
            return {
                ...state,
                nbRecords: action.value
            };

        case FORM_RESULT_TYPE_CHANGED:
            return {
                ...state,
                resultType: action.value
            };

        case FORM_LOAD_SAMPLE:
            return {
                ...state,
                criteria: [
                    {"id": 1,"name":"id","type":"integer","subtype":"increment"},
                    {"id": 2,"name":"firstname","type":"firstname","subtype":"both"},
                    {"id": 3,"name":"lastname","type":"surname","subtype":""},
                    {"id": 4,"name":"stnum","type":"street Number","subtype":""},
                    {"id": 5,"name":"stname","type":"street","subtype":""},
                    {"id": 6,"name":"state","type":"state","subtype":""},
                    {"id": 7,"name":"zip","type":"postcode","subtype":""},
                    {"id": 8,"name":"city","type":"city","subtype":""},
                    {"id": 9,"name":"phone","type":"phone","subtype":"us"},
                    {"id": 10,"name":"startdate","type":"date","subtype":"past"},
                    {"id": 11,"name":"creditcard","type":"regex","subtype":"^4[0-9]12(?:[0-9]3)?$"}
                    ]
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