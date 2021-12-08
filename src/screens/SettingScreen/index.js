import { resetPasswordAction } from 'actions/authActions';
import {connect} from 'react-redux';
import SettingScreen from './view';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  handleResetPassword: payload => {
    dispatch(resetPasswordAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
