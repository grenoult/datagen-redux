import React from 'react'
import { connect } from 'react-redux'
import FormRow from '../components/FormRow'
import { changeRowType } from '../actions'

class FormRowContainer extends React.Component {

    render() {
        return (<div>
            <FormRow
                formData={this.props.formData}
                changeRowType={this.props.changeRowType}
                id={this.props.id}
            />
        </div>);
    }
}

const mapStateToProps = state => ({
    formData: state.form.data,
    criteriaList: state.form.criteriaList
});

const mapDispatchToProps = {
    changeRowType: changeRowType
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormRowContainer);

export default FormContainer