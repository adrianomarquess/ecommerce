import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from 'styles';

const styles = StyleSheet.create({
  cartContainer: {
    margin: metrics.baseMargin,
  },

  empty: {
    fontSize: fonts.regular,
    color: colors.red,
    alignSelf: 'center',
  },
});

export default styles;
