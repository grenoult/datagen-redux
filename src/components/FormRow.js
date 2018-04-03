import React from 'react'
import PropTypes from 'prop-types'

const FormRow = ({id, formData, changeRowType, changeRowSubType, changeRowTextInput, changeRowName, criteria}) => (
    <div>
        <input id={id} type="text" name="fieldName" onChange={event => changeRowName(id, event.target.value)}/>
        <select onChange={event => changeRowType(id, event.target.value)}>
            <option value="" disabled>Type</option>
            {formData.map(function(type, i) {
                return (
                    <option key={i} name={type.name} value={i}>
                        {type.label}
                    </option>
                )
            })}
        </select>
        <Subtype rowId={id} criteria={criteria} formData={formData} changeRowSubType={changeRowSubType}/>
        <Textinput rowId={id} criteria={criteria} formData={formData} changeRowTextInput={changeRowTextInput}/>
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
    let i = props.criteria.type;

    if (!props || !props.criteria || !props.formData[i] ||
        !props.formData[i].options || !props.formData[i].options.options
    ) {
        return (<div/>)
    }

    return (
        <select onChange={event => props.changeRowSubType(props.rowId, event.target.value)}>
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
        return (<div/>)
    }

    return (
        <input type='text'
               onChange={event => props.changeRowTextInput(props.rowId, event.target.value)}
               placeholder={props.formData[i].textinputplaceholder}
        />
    )
}

FormRow.propTypes = {
    // id: PropTypes.number.isRequired,
    formData: PropTypes.array.isRequired // Is this working?
};

export default FormRow