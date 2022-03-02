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
        <div className='form-row'>
            <div className="col-md-3 form-group">
                <label htmlFor={'fieldName-'+id}>Field Name</label>
                <input type='text'
                       name='fieldName'
                       id={'fieldName-'+id}
                       onChange={event => changeRowName(id, event.target.value)}
                       className='form-control mb-2 mr-sm-2'
                       placeholder='Type field name'
                       value={criteria.name}
                       required/>
            </div>
            <div className="col-md-3 form-group">
                <label htmlFor={'fieldType-'+id}>Field Type</label>
                <select onChange={event => changeRowType(id, event.target.value)}
                        className='form-control mb-2 mr-sm-2'
                        name="fieldType"
                        defaultValue={criteria.type} // TODO test
                        >
                    <option value="" disabled>Type</option>
                    {formData.map(function(type, i) {
                        // TODO not working
                        return (
                            <option key={i} value={type.name}>
                                {type.label}
                            </option>
                        )
                    })}
                </select>
            </div>
            <Subtype rowId={id} criteria={criteria} formData={formData} changeRowSubType={changeRowSubType}/>
            <div className="col-md-3 form-group align-text-bottom">
                <div className="float-right remove-button">
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
    let result;
    const emptyResult = (<div className="col-md-3 form-group"></div>);
    if (!props || !props.criteria || !props.formData) {
        return emptyResult;
    }

    // Find if there's options
    let i = 0;
    while (props.formData[i].name !== props.criteria.type) {
        i++;
    }

    if (props.formData[i].textinput) {
        result = (
            <input type='text'
                   onChange={event => props.changeRowSubType(props.rowId, event.target.value)}
                   value={props.criteria.subtype}
                   placeholder={props.formData[i].textinputplaceholder}
                   name="fieldSubtype"
                   className='form-control mb-2 mr-sm-2'/>
        );
    } else {
        if (!props.formData[i].options || !props.formData[i].options.options) {
            return emptyResult;
        }

        result = (
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

    return ( <div className="col-md-3 form-group">
        <label htmlFor={'subType-'+props.rowId}>Subtype</label>
        {result}
    </div>);
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
        <button disabled={props.criteriaLength <= 1} className='form-control mb-2 mr-sm-2' onClick={() => props.removeFormRow(props.rowId)}>
            Remove field {props.rowId}
        </button>
    )
}

FormRow.propTypes = {
    // id: PropTypes.number.isRequired,
    formData: PropTypes.array.isRequired // Is this working?
};

export default FormRow