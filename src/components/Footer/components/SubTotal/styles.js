import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderTopColor: colors.regular,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: colors.regular,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    marginBottom: metrics.smallMargin,
  },

  total: {
    color: colors.green,
    fontSize: fonts.bigger,
    fontWeight: '900',
  },
});

export default styles;
