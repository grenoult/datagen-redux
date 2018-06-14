import React from 'react'
import FormContainer from './FormContainer';
import ResultContainer from './ResultContainer';

class HomeContainerComponent extends React.Component {
    render() {
        return (<div>
            <FormContainer/>
            <ResultContainer/>
        </div>);
    }
}

export default HomeContainerComponent