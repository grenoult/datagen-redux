import React from 'react'
import { connect } from 'react-redux'
import { getFormData } from '../actions'
import Form from '../components/Form'

class Feeds extends React.Component {

    componentDidMount() {
        console.log('Mounted');
        // console.log(this.props.getFormData());
        this.props.getFormData();
    }

    render() {
        return (<div>
            <Form
                isLoading={this.props.loading}
                onClick={this.props.onLoadedClick}
            />
        </div>);
    }
}

const mapStateToProps = state => ({
    loading: state.form.loading
});

const mapDispatchToProps = {
    getFormData
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Feeds);

export default FormContainer