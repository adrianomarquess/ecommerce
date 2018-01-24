import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: metrics.statusBarHeight,
    height: metrics.navBarHeight + metrics.statusBarHeight,
    paddingHorizontal: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },

  title: {
    color: colors.red,
    fontSize: fonts.title,
    fontWeight: '800',
    alignSelf: 'center',
  },

  leftButton: {
    width: 22,
  },

  rightHidden: {
    width: 22,
  },

});

export default styles;
