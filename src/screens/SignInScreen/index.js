import {connect} from 'react-redux';
import SignInScreen from './view';
import { signInAction, thirdPartysignInAction } from 'actions/authActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  handleThirdPartySignIn: payload => {
    dispatch(thirdPartysignInAction(payload));
  },
  handleSignIn: payload => {
    dispatch(signInAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
