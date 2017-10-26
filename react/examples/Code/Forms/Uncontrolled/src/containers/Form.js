import { connect } from 'react-redux';

import { submit } from '../actions';
import Form from '../components/Form';

const mapStateToProps = (state) => ({
  form: state.form,
  submittedForm: state.submittedForm,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(data) {
    dispatch(submit(data));
  }
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer;
