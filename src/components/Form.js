import React from 'react'
import PropTypes from 'prop-types'
import FormRow from './FormRow'

const Form = ({ isLoading, onAddRow, criteriaList }) => (
    <div>
        { criteriaList.length }
        { isLoading.toString() }
        <button onClick={() => onAddRow() }>Add</button>
        {criteriaList.map((o, i) => <FormRow key={i}/>)}
    </div>



);

// Form.propTypes = {
//     rows: PropTypes.func.isRequired
// };

export default Form