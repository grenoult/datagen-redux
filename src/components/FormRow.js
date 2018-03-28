import React from 'react'
import PropTypes from 'prop-types'

const FormRow = ({id, formData}) => (
    <div>
        <input id={id} type="text" name="fieldName"/>
        <select>
            <option value="" disabled>Type</option>
            {formData.map(function(field, i) {
                return (
                    <option key={i} name={field.name} value={i}>
                        {field.label}
                    </option>
                )
            })}
        </select>
        /*
        <select ref="mySelectBox">
            <option value="" disabled selected>{this.props.availableFields[this.props.fieldSelected].options.name}</option>
            {
                Object.keys(subTypes).map(function (key) {
                    var label = subTypes[key]
                    return (
                        <option key={key} value={key}>
                            {label}
                        </option>
                    )
                })
            }
        </select>
        */
    </div>
);

FormRow.propTypes = {
    id: PropTypes.number.isRequired,
    formData: PropTypes.array.isRequired // Is this working?
};

export default FormRow