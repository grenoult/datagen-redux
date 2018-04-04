import React from 'react'
import { connect } from 'react-redux'
import { getFormData, addFormRow, getResult } from '../actions'
import Form from '../components/Form'

class FormContainerComponent extends React.Component {

    componentDidMount() {
        this.props.getFormData();
    }

    render() {
        return (<div>
            <Form
                isLoading={this.props.loading}
                onAddRow={this.props.addFormRow}
                criteriaList={this.props.criteriaList}
            />
            <button onClick={this.props.getResult}>Generate</button>
        </div>);
    }
}

const mapStateToProps = state => ({
    loading: state.form.loading,
    criteriaList: state.form.criteria
});

const mapDispatchToProps = {
    getFormData,
    addFormRow,
    getResult,
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainerComponent);

export default FormContainer