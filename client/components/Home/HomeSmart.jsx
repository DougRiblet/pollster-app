import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import HomeDumb from './HomeDumb';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({  }, dispatch);
};

const HomeSmart = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeDumb);

export default HomeSmart;
