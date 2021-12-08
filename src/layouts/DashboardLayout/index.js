import {connect} from 'react-redux';
import DashboardLayout from './view';
import { signOutAction } from 'actions/authActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  handleSignOut: payload => {
    dispatch(signOutAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
