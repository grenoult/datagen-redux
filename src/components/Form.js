import React from 'react'
import PropTypes from 'prop-types'
import FormRowContainer from '../containers/FormRowContainer'

const Form = ({ isLoading, onAddRow, criteriaList }) => (
    <Formcontent isLoading={isLoading} onAddRow={onAddRow} criteriaList={criteriaList}/>
);

function Formcontent(props) {
    if (props.isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        <div>
            {
                /**
                 * We don't pass "i" as key because it can be a mess when moving rows order.
                 * Also, child doesn't have access to key, so we pass id.
                 */
                props.criteriaList.map((criteria, i) => (
                    <FormRowContainer key={criteria.id} id={criteria.id} criteria={criteria}/>
                ))
            }
            <button onClick={() => props.onAddRow() }>Add</button>
        </div>
    );
}

Form.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    criteriaList: PropTypes.array.isRequired
};

export default Form