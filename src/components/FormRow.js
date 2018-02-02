import React from 'react'
import PropTypes from 'prop-types'

const FormRow = ({key}) => (
    <div>
        <input id="{key}" type="text" name="fieldName"/>
    </div>
);

FormRow.propTypes = {
    key: PropTypes.func.isRequired
};

export default FormRow