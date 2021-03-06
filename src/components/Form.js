import React from 'react'
import PropTypes from 'prop-types'
import FormRowContainer from '../containers/FormRowContainer'

const Form = ({ isLoading, onAddRow, criteriaList, error, errorMessage }) => (
    <Formcontent isLoading={isLoading} onAddRow={onAddRow} criteriaList={criteriaList} error={error} errorMessage={errorMessage}/>
);

function Formcontent(props) {
    if (props.isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (props.error) {
        let message;
        if (props.errorMessage && props.errorMessage.length > 0) {
            message = 'Message: '+props.errorMessage;
        }

        return (
            <div className='alert alert-danger'>
                Oops, something went wrong!<br/>
                Please try again later.<br/>
                {message}
            </div>
        )
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
            <div className='form-inline justify-content-md-end'>
                <button id='add-row' type='button' onClick={() => props.onAddRow() } className='form-control mb-2 mr-sm-2'>+</button>
            </div>
        </div>
    );
}

Form.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    criteriaList: PropTypes.array.isRequired
};

export default Form