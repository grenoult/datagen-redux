export const RESULT_LOADING = 'RESULT_LOADING';
export const RESULT_LOADED = 'RESULT_LOADED';
export const RESULT_RESET = 'RESULT_RESET';

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

export const resetResult = function (value) {
    return {
        type: RESULT_RESET
    }
}
