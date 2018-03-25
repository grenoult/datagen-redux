import React from 'react'
import PropTypes from 'prop-types'
import FormRow from './FormRow'

const Form = ({ isLoading, onAddRow }) => (
    <div>
        { isLoading.toString() }
        <button onClick={() => onAddRow(Date.now()) }>Add</button>
    </div>
);

// Form.propTypes = {
//     rows: PropTypes.func.isRequired
// };

export default Form