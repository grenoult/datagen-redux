import React from 'react'
import { connect } from 'react-redux'
import { getResult, addFormRow, startGeneratingData } from '../actions'
import Result from '../components/Result'

class ResultContainerComponent extends React.Component {
    render() {
        return <Result loading={this.props.loading}
                loaded={this.props.loaded}
                criteriaList={this.props.criteriaList}
                result={this.props.result}/>
    }
}

const mapStateToProps = state => ({
    loading: state.result.loading,
    loaded: state.result.loaded,
    criteriaList: state.form.criteria,
    result: state.result.data
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