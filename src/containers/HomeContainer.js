import React from 'react'
import { connect } from 'react-redux';
import FormContainer from './FormContainer';
import ResultContainer from './ResultContainer';
import { resetResult } from '../actions/result';

class HomeContainerComponent extends React.Component {
    componentDidMount() {
        this.props.resetResult();
    }
    render() {
        return (<div>
            <FormContainer/>
            <ResultContainer/>
        </div>);
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    resetResult
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainerComponent);

export default HomeContainer;