import React from 'react'
import { connect } from 'react-redux'
import FormRow from '../components/FormRow'

class FormRowContainer extends React.Component {

    componentDidMount() {
        console.log('mounted')
    }

    render() {
        return (<div>
            <FormRow
                formData={this.props.formData}
            />
        </div>);
    }
}

const mapStateToProps = state => ({
    formData: state.form.data,
});

const mapDispatchToProps = {
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormRowContainer);

export default FormContainer