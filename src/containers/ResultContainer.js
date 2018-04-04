import React from 'react'
import { connect } from 'react-redux'
import { getResult, addFormRow, startGeneratingData } from '../actions'

class ResultContainerComponent extends React.Component {

    componentDidMount() {
        if (this.props.loading && !this.props.loaded) {
            console.log('Launch Ajax request');
        }
    }

    render() {
        // return (<div>{JSON.stringify(this.props)}</div>)
        if (!this.props.loading && !this.props.loaded) {
            return null;
        }

        if (this.props.loading && !this.props.loaded) {
            return (
                <div>Generating...</div>
            );
        }

        return (
            <div>
                {this.props.toString()}
                <ul>
                    <li>Loading: {this.props.loading.toString()}</li>
                    <li>Loaded: {this.props.loaded.toString()}</li>
                </ul>
            </div>);
    }
}

const mapStateToProps = state => ({
    loading: state.result.loading,
    loaded: state.result.loaded,
    criteriaList: state.form.criteria
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