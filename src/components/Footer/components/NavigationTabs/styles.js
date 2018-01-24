import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  tabBar: {
    height: metrics.tabBarHeight,
    backgroundColor: colors.white,
    borderTopColor: colors.regular,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});

export default styles;
