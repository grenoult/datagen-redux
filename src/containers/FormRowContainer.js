import React from 'react'
import { connect } from 'react-redux'
import FormRow from '../components/FormRow'
import { changeRowType } from '../actions'
import { getCriteriaIndexById } from '../reducers/form'

class FormRowContainer extends React.Component {
    componentDidMount() {
        console.log(this.props.criteria)
    }

    render() {
        return (
        <div>
            <FormRow
                formData={this.props.formData}
                changeRowType={this.props.changeRowType}
                criteria={this.props.criteria}
                id={this.props.id}
                type={this.props.type}
            />
            {this.props.criteria.id} - {this.props.criteria.type}
        </div>);
    }
}

const mapStateToProps = state => ({
    formData: state.form.data,
    // criteria: state.form.criteria,
});

const mapDispatchToProps = {
    changeRowType: changeRowType
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormRowContainer);

export default FormContainer