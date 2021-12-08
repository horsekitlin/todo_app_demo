import {connect} from 'react-redux';
import DashboardScreen from './view';
import { getTasksAction, addTaskAction, updateTaskAction } from 'actions/taskActions';

const mapStateToProps = ({ auth, task }) => ({
  taskList: task.list,
  user: auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleGetTasks: payload => {
    dispatch(getTasksAction(payload));
  },
  handleAddTask: payload => {
    dispatch(addTaskAction(payload));
  },
  handleUpdateTask: payload => {
    dispatch(updateTaskAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
