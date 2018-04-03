import React from 'react'
import PropTypes from 'prop-types'
import FormRowContainer from '../containers/FormRowContainer'

const Form = ({ isLoading, onAddRow, criteriaList }) => (
    <div>
        {
            /**
             * We don't pass "i" as key because it can be a mess when moving rows order.
             * Also, child doesn't have access to key, so we pass id.
             */
            criteriaList.map((criteria, i) => (
                <FormRowContainer key={criteria.id} id={criteria.id} criteria={criteria}/>
            ))
        }
        { isLoading.toString() }
        <button onClick={() => onAddRow() }>Add</button>
    </div>
);

Form.propTypes = {
    isLoading: PropTypes.func.isRequired,
    criteriaList: PropTypes.func.isRequired
};

export default Form