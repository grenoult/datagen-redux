import React from 'react'
import PropTypes from 'prop-types'
import FormRow from './FormRow'

const Form = ({ isLoading, onClick }) => (
    <div>
        { isLoading.toString() }
        <button onClick={onClick}>Click me!</button>
    </div>
)

// Form.propTypes = {
//     rows: PropTypes.func.isRequired
// };

export default Form