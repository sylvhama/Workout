import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  timerShow: state.timer.show
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
