import {connect} from 'react-redux';
import ValidateEmailScreen from './view';

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ValidateEmailScreen);
