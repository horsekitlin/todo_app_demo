import {connect} from 'react-redux';
import ValidateEmailScreen from './view';
import { resendValidationEmailAction } from 'actions/authActions';
import { getUserAction } from 'actions/useractions';

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = (dispatch) => ({
  handleGetUser: (payload) => {
    dispatch(getUserAction(payload));
  },
  handleResendValidationEmail: () => {
    dispatch(resendValidationEmailAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ValidateEmailScreen);
