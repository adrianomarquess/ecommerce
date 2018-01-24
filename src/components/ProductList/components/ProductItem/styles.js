import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: (metrics.screenWidth / 2) - 25,
    marginBottom: metrics.smallMargin,
    padding: metrics.smallMargin,
    borderRadius: metrics.smallRadius,
  },

  'product-Left': {
    marginRight: metrics.tinyMargin,
  },

  'product-Right': {
    marginLeft: metrics.tinyMargin,
  },

  image: {
    height: 180,
    marginBottom: metrics.smallMargin,
  },

  title: {
    fontSize: fonts.regular,
    color: colors.black,
    fontWeight: 'bold',
  },

  brand: {
    color: colors.regular,
    fontSize: fonts.smaller,
    marginBottom: metrics.tinyMargin,
  },

  price: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.green,
  },
});

export default styles;
