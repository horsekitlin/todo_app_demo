import {connect} from 'react-redux';
import SignInScreen from './view';
import { signInAction } from 'actions/authActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  handleSignIn: payload => {
    dispatch(signInAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
