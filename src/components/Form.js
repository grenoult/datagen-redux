import React from 'react'
import PropTypes from 'prop-types'
import FormRowContainer from '../containers/FormRowContainer'
import FormRow from '../components/FormRow';

const Form = ({ isLoading, onAddRow, criteriaList }) => (
    <div>
        {
            /**
             * We don't pass "i" as key because it can be a mess when moving rows order.
             * Also, child doesn't have access to key, so we pass id.
             */
            criteriaList.map((criteria, i) => (
                <FormRowContainer key={criteriaList.length} id={criteriaList.length} data={criteria}/>
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