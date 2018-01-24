import { StyleSheet } from 'react-native';
import { general, metrics, fonts, colors } from 'styles';

const styles = StyleSheet.create({
  ...general,

  productContainer: {
    margin: metrics.baseMargin,
  },

  product: {
    backgroundColor: colors.white,
    padding: metrics.baseMargin,
    borderRadius: metrics.smallRadius,
  },

  image: {
    height: 285,
    resizeMode: 'contain',
    marginBottom: metrics.baseMargin,
  },

  informationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: metrics.baseMargin,
  },

  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: metrics.smallMargin,
  },

  priceContainer: {
    alignItems: 'flex-end',
  },

  title: {
    color: colors.black,
    fontSize: fonts.big,
    fontWeight: 'bold',
  },

  brand: {
    color: colors.regular,
    fontSize: fonts.small,
  },

  price: {
    color: colors.green,
    fontSize: fonts.bigger,
    fontWeight: 'bold',
  },

  button: {
    alignSelf: 'stretch',
    backgroundColor: colors.green,
    height: 45,
    borderRadius: metrics.smallRadius,
    justifyContent: 'center',
  },

  buttonTitle: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: fonts.regular,
    fontWeight: '800',
  },
});

export default styles;
