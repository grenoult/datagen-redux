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
    <div id={'row-'+id}>
        <div className='form-inline form-row'>
            <div className="col-md-10">
                <input type="text"
                       name="fieldName"
                       onChange={event => changeRowName(id, event.target.value)}
                       className='form-control mb-2 mr-sm-2'
                       placeholder='Type field name'
                       value={criteria.name}
                       required/>
                <select onChange={event => changeRowType(id, event.target.value)}
                        className='form-control mb-2 mr-sm-2'
                        name="fieldType"
                        value={criteria.type}>
                    <option value="" disabled>Type</option>
                    {formData.map(function(type, i) {
                        return (
                            <option key={i} value={type.name}>
                                {type.label}
                            </option>
                        )
                    })}
                </select>
                <Subtype rowId={id} criteria={criteria} formData={formData} changeRowSubType={changeRowSubType}/>
            </div>
            <div className='col-md-2'>
                <div className="float-right">
                    <Removebutton rowId={id} criteriaLength={criteriaLength} removeFormRow={removeFormRow}/>
                </div>
            </div>
        </div>
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
                   name="fieldSubtype"
                   className='form-control mb-2 mr-sm-2'/>
        );
    }

    if (!props.formData[i].options || !props.formData[i].options.options) {
        return null
    }

    return (
        <select onChange={event => props.changeRowSubType(props.rowId, event.target.value)}
                value={props.criteria.subtype}
                name="fieldSubtype"
                className='form-control mb-2 mr-sm-2'>
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
 * Shows remove button
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function Removebutton(props)
{
    return (
        <button disabled={props.criteriaLength <= 1} className='form-control mb-2 mr-sm-2' onClick={() => props.removeFormRow(props.rowId)}>&times;</button>
    )
}

FormRow.propTypes = {
    // id: PropTypes.number.isRequired,
    formData: PropTypes.array.isRequired // Is this working?
};

export default FormRow