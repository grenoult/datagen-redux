import React from 'react'
import PropTypes from 'prop-types'

const FormRow = ({id, formData, changeRowType, criteria}) => (
    <div>
        <input id={id} type="text" name="fieldName"/>
        {typeof criteria}
        <select onChange={event => changeRowType(id, event.target.value)}>
            <option value="" disabled>Type</option>
            {formData.map(function(field, i) {
                return (
                    <option key={i} name={field.name} value={i}>
                        {field.label}
                    </option>
                )
            })}
        </select>
        <Subtype criteria={criteria}/>
    </div>
);

function Subtype(props)
{
    console.log('props');
    console.log(props);
    if (!props || !props.criteria) {
        return (<div>(nothing)</div>)
    }
    return (<div>123</div>)
    // return <div>{props.criteria.toString()}</div>
}

FormRow.propTypes = {
    id: PropTypes.number.isRequired,
    formData: PropTypes.array.isRequired // Is this working?
};

export default FormRow

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