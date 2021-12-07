import {connect} from 'react-redux';
import SignUpFormScreen from './view';
import { signUpAction } from 'actions/authActions';

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleSignUp: payload => {
    dispatch(signUpAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormScreen);
