import {connect} from 'react-redux';
import NotFoundScreen from './view';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundScreen);
