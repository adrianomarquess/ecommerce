import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import TabItem from './components/TabItem';

import styles from './styles';

const tabs = [
  { index: 0, icon: 'home' },
  { index: 1, icon: 'shopping-cart' },
];

const NavigationTabs = ({ navigationState, jumpToIndex }) => (
  <View style={styles.tabBar}>
    { tabs.map(tab => (
      <TabItem
        key={tab.index}
        icon={tab.icon}
        active={(tab.index === navigationState.index)}
        onPress={() => jumpToIndex(tab.index)}
      />
    )) }
  </View>
);

NavigationTabs.propTypes = {
  navigationState: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
  jumpToIndex: PropTypes.func.isRequired,
};

export default NavigationTabs;
