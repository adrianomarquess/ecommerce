import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginBottom: metrics.smallMargin,
    borderRadius: metrics.smallRadius,
    flexDirection: 'row',
    alignItems: 'center',
    padding: metrics.baseMargin,
  },

  image: {
    resizeMode: 'contain',
    width: 40,
    height: 60,
    marginRight: metrics.baseMargin,
  },

  productInfo: {
    flex: 1,
  },

  name: {
    fontWeight: 'bold',
    fontSize: fonts.regular,
    color: colors.black,
  },

  brand: {
    fontSize: fonts.small,
    color: colors.regular,
    marginBottom: metrics.tinyMargin,
  },

  price: {
    fontWeight: '800',
    fontSize: fonts.regular,
    color: colors.green,
  },

  productQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: metrics.baseMargin,
  },

  input: {
    borderColor: colors.regular,
    borderWidth: 1,
    color: colors.regular,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    width: 40,
    height: 30,
    paddingLeft: metrics.smallMargin,
    marginRight: metrics.baseMargin,
    borderRadius: metrics.smallRadius,
  },

  icon: {
    color: colors.regular,
  },
});

export default styles;
