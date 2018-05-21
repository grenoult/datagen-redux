import React from 'react'
import PropTypes from 'prop-types'

const FormRow = ({
    id,
    formData,
    changeRowType,
    changeRowSubType,
    changeRowTextInput,
    changeRowName,
    removeFormRow,
    criteria,
    criteriaLength
    }) => (
    <div id={'row-'+id} className="form-row">
        <input type="text" name="fieldName"
               onChange={event => changeRowName(id, event.target.value)}
               value={criteria.name}/>
        <select onChange={event => changeRowType(id, event.target.value)} name="fieldType">
            <option value="" disabled>Type</option>
            {formData.map(function(type, i) {
                return (
                    <option key={i} value={type.name} selected={criteria.type === type.name ? 'selected' : ''}>
                        {type.label}
                    </option>
                )
            })}
        </select>
        <Subtype rowId={id} criteria={criteria} formData={formData} changeRowSubType={changeRowSubType}/>
        <Textinput rowId={id} criteria={criteria} formData={formData} changeRowTextInput={changeRowTextInput}/>
        <Removebutton rowId={id} criteriaLength={criteriaLength} removeFormRow={removeFormRow}/>
    </div>
);

/**
 * Shows subtype dropdown, if any
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function Subtype(props)
{
    if (!props || !props.criteria || !props.formData) {
        return null;
    }

    // Find if there's options
    let i = 0;
    while (props.formData[i].name !== props.criteria.type) {
        i++;
    }

    if (props.formData[i].textinput) {
        return (
            <input type='text'
                   onChange={event => props.changeRowSubType(props.rowId, event.target.value)}
                   value={props.criteria.subtype}
                   placeholder={props.formData[i].textinputplaceholder}
                   name="fieldSubtype"/>
        );
    }

    if (!props.formData[i].options || !props.formData[i].options.options) {
        return null
    }

    return (
        <select onChange={event => props.changeRowSubType(props.rowId, event.target.value)}
                value={props.criteria.subtype}
                name="fieldSubtype">
            <option value="" disabled>{props.formData[i].options.name}</option>
            {
            // Convert object to array first, then use map to loop through it
            Object.entries(props.formData[i].options.options).map(function(subtype, i) {
                return (
                    <option key={i} value={subtype[0]}>
                        {subtype[1]}
                    </option>
                )
            })}
        </select>
    );
}

/**
 * Shows type text input, if any
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function Textinput(props)
{
    let i = props.criteria.type;

    if (!props || !props.criteria || !props.formData[i] || !props.formData[i].textinput) {
        return null
    }

    return (
        <input type='text'
               onChange={event => props.changeRowTextInput(props.rowId, event.target.value)}
               placeholder={props.formData[i].textinputplaceholder}
               name="fieldSubtype"
        />
    )
}

/**
 * Shows remove button
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function Removebutton(props)
{
    if (props.criteriaLength <= 1) {
        return null
    }

    return (
        <button onClick={() => props.removeFormRow(props.rowId)}>Remove {props.criteriaLength} </button>
    )
}

FormRow.propTypes = {
    // id: PropTypes.number.isRequired,
    formData: PropTypes.array.isRequired // Is this working?
};

export default FormRow