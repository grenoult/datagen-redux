import React from 'react'
import { connect } from 'react-redux'
import { getFormData, addFormRow, getResultFromForm, changeNbRecordsNumber, changeResultType, loadSample } from '../actions/form'
import Form from '../components/Form'

class FormContainerComponent extends React.Component {

    componentDidMount() {
        this.props.getFormData();
    }

    /**
     * Display actions such as: number of record, result type, generate data button and load sample form button.
     */
    actions() {
        if (!this.props.loading && !this.props.error) {
            return (
                <div>
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
                            type='submit'
                            className='form-control mb-2 mr-sm-2 btn btn-primary'>
                        Generate
                    </button>
                    <button onClick={this.props.loadSample}
                            className='form-control mb-2 mr-sm-2 btn btn-light'
                            type='button'>
                        Load Sample Data
                    </button>
                </div>
            )
        }
    }

    render() {
        return (<div>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={(e) => {e.preventDefault(); this.props.getResult(this.props.criteriaList, this.props.nbRecords)}}>
                        <Form
                            isLoading={this.props.loading}
                            onAddRow={this.props.addFormRow}
                            criteriaList={this.props.criteriaList}
                            error={this.props.error}
                            errorMessage={this.props.errorMessage}
                        />
                        {this.actions()}
                    </form>
                </div>
            </div>
        </div>);
    }
}

const mapStateToProps = state => ({
    loading: state.form.loading,
    criteriaList: state.form.criteria,
    nbRecords: state.form.nbRecords,
    error: state.form.error,
    errorMessage: state.form.errorMessage,
});

const mapDispatchToProps = {
    getFormData,
    addFormRow,
    getResultFromForm,
    changeNbRecordsNumber,
    changeResultType,
    loadSample
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainerComponent);

export default FormContainer