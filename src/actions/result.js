export const RESULT_LOADING = 'RESULT_LOADING';
export const RESULT_LOADED = 'RESULT_LOADED';

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
