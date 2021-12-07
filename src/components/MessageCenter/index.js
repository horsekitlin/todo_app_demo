import {connect} from 'react-redux';
import MessageCenter from './view';

const mapStateToProps = ({message}) => {
  return message;
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageCenter);
