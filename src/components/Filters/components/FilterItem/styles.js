import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: metrics.baseMargin,
  },

  filterItemActive: {
    borderBottomColor: colors.white,
    borderBottomWidth: 5,
    paddingTop: 5,
  },

  'filterItem-first': {
    marginLeft: metrics.baseMargin,
  },

  filterTitle: {
    color: colors.white,
    fontSize: fonts.small,
    fontWeight: 'bold',
  },
});

export default styles;
