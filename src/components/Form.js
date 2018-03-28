import React from 'react'
import PropTypes from 'prop-types'
import FormRowContainer from '../containers/FormRowContainer'
import FormRow from '../components/FormRow';

const Form = ({ isLoading, onAddRow, criteriaList }) => (
    <div>
        {
            criteriaList.map((criteria, i) => (
                <FormRowContainer key={i} data={criteria}/>
            ))
        }
        { criteriaList.length }
        { isLoading.toString() }
        <button onClick={() => onAddRow() }>Add</button>
    </div>



);

// Form.propTypes = {
//     rows: PropTypes.func.isRequired
// };

export default Form