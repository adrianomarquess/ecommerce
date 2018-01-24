import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import NavigationTabs from './components/NavigationTabs';
import SubTotal from './components/SubTotal';

const Footer = props => (
  <View>
    { props.navigationState.index === 1 && <SubTotal /> }
    <NavigationTabs {...props} />
  </View>
);

Footer.propTypes = {
  navigationState: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
};

export default Footer;
