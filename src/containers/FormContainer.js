import React from 'react'
import { connect } from 'react-redux'
import { getFormData, addFormRow, getResult, changeNbRecordsNumber, changeResultType, loadSample } from '../actions'
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
            <select onChange={event => this.props.changeNbRecordsNumber(event.target.value)}>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="500">500</option>
            </select>
            <select onChange={event => this.props.changeResultType(event.target.value)}>
                <option value="html">HTML</option>
                <option value="csv">CSV</option>
                <option value="sql">SQL</option>
            </select>
            <button id="generate-btn" onClick={() => this.props.getResult(this.props.criteriaList)}>Generate</button>
            <button onClick={this.props.loadSample}>Load Sample Data</button>
        </div>);
    }
}

const mapStateToProps = state => ({
    loading: state.form.loading,
    criteriaList: state.form.criteria,
    nbRecords: state.form.nbRecords
});

const mapDispatchToProps = {
    getFormData,
    addFormRow,
    getResult,
    changeNbRecordsNumber,
    changeResultType,
    loadSample
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainerComponent);

export default FormContainer