import React from 'react'
import { connect } from 'react-redux'
import FormRow from '../components/FormRow'
import { changeRowType, changeRowSubType, changeRowTextInput, changeRowName } from '../actions'

class FormRowContainer extends React.Component {
    render() {
        return (
        <div>
            <FormRow
                formData={this.props.formData}
                changeRowType={this.props.changeRowType}
                changeRowSubType={this.props.changeRowSubType}
                changeRowTextInput={this.props.changeRowTextInput}
                changeRowName={this.props.changeRowName}
                criteria={this.props.criteria}
                id={this.props.id}
                type={this.props.type}
            />
        </div>);
    }
}

const mapStateToProps = state => ({
    formData: state.form.data,
});

const mapDispatchToProps = {
    changeRowType: changeRowType,
    changeRowSubType: changeRowSubType,
    changeRowTextInput: changeRowTextInput,
    changeRowName: changeRowName
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormRowContainer);

export default FormContainer