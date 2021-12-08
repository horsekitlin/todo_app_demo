import {connect} from 'react-redux';
import DashboardLayout from './view';
import { signOutAction } from 'actions/authActions';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleSignOut: payload => {
    dispatch(signOutAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
