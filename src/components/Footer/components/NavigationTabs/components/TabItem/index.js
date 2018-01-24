import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const TabItem = ({ icon, active, onPress }) => (
  <TouchableOpacity
    style={styles.tabItem}
    onPress={onPress}
    activeOpacity={0.6}
  >
    <Icon name={icon} size={22} style={active ? styles.activeIcon : styles.inactiveIcon} />
  </TouchableOpacity>
);

TabItem.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default TabItem;
