/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Form from 'src/components/Form';

// Action Creators
import { handleInputChanged, handleSubmit } from 'src/store/reducer';


const mapStateToProps = (state, ownProps) => ({
  input: state.input,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleInputChanged: (input) => {
    dispatch(handleInputChanged(input));
  },
  handleSubmit: (input) => {
    dispatch(handleSubmit(input));
  },
});

// Container
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);


/**
 * Export
 */
export default FormContainer;
