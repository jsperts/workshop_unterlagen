import { connect } from 'react-redux';

import { valueChange, submit } from '../actions';
import Form from '../components/Form';

const mapStateToProps = (state) => ({
  form: state.form,
  submittedForm: state.submittedForm,
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange(...args) {
    dispatch(valueChange(...args));
  },
  onSubmit(event) {
    event.preventDefault();

    dispatch(submit());
  }
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer;
