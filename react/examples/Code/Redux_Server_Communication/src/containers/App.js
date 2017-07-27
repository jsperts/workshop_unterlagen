import { connect } from 'react-redux';

import {
  addData,
  deleteData,
} from '../actions';
import Click from '../components/App';

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  onAddData() {
    dispatch(addData({ name: 'Dummy data' }));
  },
  onDeleteData(id) {
    dispatch(deleteData(id));
  },
});

const ClickContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Click);

export default ClickContainer;
