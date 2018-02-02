import React from 'react'
import PropTypes from 'prop-types'
import FormRow from './FormRow'

const Form = ({ rows }) => (
    <div>123
        {/*{rows.map((row, index) => (*/}
            {/*<FormRow key={index} {...row} />*/}
        // ))}
    </div>
)

Form.propTypes = {
    rows: PropTypes.func.isRequired
};

export default Form