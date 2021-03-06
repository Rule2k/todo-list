/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Count from 'src/components/Count';

// Action Creators


const mapStateToProps = (state, ownProps) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

// Container
const CountContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Count);


/**
 * Export
 */
export default CountContainer;
