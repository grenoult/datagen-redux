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
            <div className="row">
                <div className="col-md-10 col-xs-12">
                    <Form
                        isLoading={this.props.loading}
                        onAddRow={this.props.addFormRow}
                        criteriaList={this.props.criteriaList}
                    />
                    <div className="form-inline justify-content-md-center">
                        <div className="col-auto">
                            <select id="formResultNumber"
                                    onChange={event => this.props.changeNbRecordsNumber(event.target.value)}
                                    className='form-control mb-2 mr-sm-2'>
                                <option value="10">10</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="500">500</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <select id="formResultType"
                                    onChange={event => this.props.changeResultType(event.target.value)}
                                    className='form-control mb-2 mr-sm-2'>
                                <option value="html">HTML</option>
                                <option value="csv">CSV</option>
                                <option value="sql">SQL</option>
                            </select>
                        </div>
                    </div>
                    <button id="generate-btn"
                            onClick={() => this.props.getResult(this.props.criteriaList, this.props.nbRecords)}
                            className='form-control mb-2 mr-sm-2 btn btn-primary'>
                        Generate
                    </button>
                    <button onClick={this.props.loadSample}
                            className='form-control mb-2 mr-sm-2 btn btn-light'>
                        Load Sample Data</button>
                </div>
            </div>
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