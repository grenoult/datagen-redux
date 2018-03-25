import React from 'react'
import { connect } from 'react-redux'
import { getFormData, addFormRow } from '../actions'
import Form from '../components/Form'

class Feeds extends React.Component {

    componentDidMount() {
        this.props.getFormData();
    }

    render() {
        return (<div>
            <Form
                isLoading={this.props.loading}
                onAddRow={this.props.addFormRow}
            />
        </div>);
    }
}

const mapStateToProps = state => ({
    loading: state.form.loading,
});

const mapDispatchToProps = dispatch => ({
    getFormData: () => dispatch(getFormData()),
    addFormRow: criteria => dispatch(addFormRow(criteria))
});

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Feeds);

export default FormContainer