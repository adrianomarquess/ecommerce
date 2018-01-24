import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Routes from './routes';

const Navigator = ({ dispatch, nav }) => (
  <Routes
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
  />
);

Navigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(Navigator);
