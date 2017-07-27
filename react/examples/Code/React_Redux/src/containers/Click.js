import { connect } from 'react-redux';

import { incrementCounter } from '../actions';
import Click from '../components/Click';

const mapStateToProps = (state/*, ownProps*/) => ({
  number: state.count,
});

const mapDispatchToProps = (dispatch/*, ownProps*/) => ({
  onIncrement() {
    dispatch(incrementCounter());
  },
});

const ClickContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Click);

export default ClickContainer;
