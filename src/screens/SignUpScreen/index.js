import { sendMessageAction } from 'actions/globalAreaActions';
import {connect} from 'react-redux';
import SignUpScreen from './view';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  handleSendMessage: (payload) => {
    dispatch(sendMessageAction(payload.status, payload.text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
