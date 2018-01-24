import { StyleSheet } from 'react-native';
import { metrics } from 'styles';

const styles = StyleSheet.create({

  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: metrics.baseMargin,
  },

  loading: {
    flex: 1,
  },

});

export default styles;
