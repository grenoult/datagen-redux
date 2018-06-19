import React from 'react'
import { connect } from 'react-redux'
import { getResult, addFormRow } from '../actions/form'
import { startGeneratingData } from '../actions/result'
import Result from '../components/Result'

class ResultContainerComponent extends React.Component {
    render() {
        return <Result
            loading={this.props.loading}
            loaded={this.props.loaded}
            criteriaList={this.props.criteriaList}
            result={this.props.result}
            resultType={this.props.resultType}
        />
    }
}

const mapStateToProps = state => ({
    loading: state.result.loading,
    loaded: state.result.loaded,
    criteriaList: state.form.criteria,
    result: state.result.data,
    resultType: state.form.resultType
});

const mapDispatchToProps = {
    getResult,
    addFormRow,
    startGeneratingData,
};

const ResultContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultContainerComponent);

export default ResultContainer