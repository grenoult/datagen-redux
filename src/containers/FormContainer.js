import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Form from '../components/Form'

const loadForm = (state, action) => {
    switch (action) {
        case 'FORM_LOADED':
            return Object.assign({}, state, {
                loaded: true
            });
        case 'FORM_LOADING':
            return Object.assign({}, state, {
                loaded: false,
                data: state.data.push()
            });
        default:
            return state;
    }
};

const mapStateToProps = state => {
    console.log("State!");
    console.log(state);
    return {
        state: {
            form: {
                loaded: loadForm(state.form, state.action)
            }
        }
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // onTodoClick: id => {
        //     dispatch(toggleTodo(id))
        // }
    }
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default FormContainer