import React from 'react'
import PropTypes from 'prop-types'

const FormRow = ({id, formData, changeRowType, criteria, type, index}) => (
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
        {type}
        <Subtype criteria={criteria} index={index}/>
    </div>
);

function Subtype(props)
{
    console.log(props.criteria);
    if (!props || !props.criteria) {
        return (<div>(nothing)</div>)
    }
    return (<pre>{typeof props.criteria}</pre>)
    // return <div>{props.criteria.toString()}</div>
}

FormRow.propTypes = {
    // id: PropTypes.number.isRequired,
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