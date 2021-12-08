import { addTaskAction, updateTaskAction } from 'actions/taskActions';
import {connect} from 'react-redux';
import DashboardScreen from './view';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddTask: payload => {
    dispatch(addTaskAction(payload));
  },
  handleUpdateTask: payload => {
    dispatch(updateTaskAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
