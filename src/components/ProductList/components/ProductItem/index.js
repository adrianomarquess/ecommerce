import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, TouchableOpacity } from 'react-native';

// Redux
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

export class ProductItem extends Component {
  static propTypes = {
    product: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
    index: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  navigateToDetails = () => {
    const { product, dispatch } = this.props;

    return dispatch(NavigationActions.navigate({
      routeName: 'Detail',
      params: { product },
    }));
  };

  render() {
    const { product } = this.props;
    return (
      <TouchableOpacity
        onPress={this.navigateToDetails}
        activeOpacity={0.7}
        style={[
          styles.container,
          (this.props.index % 2 === 0) ? styles['product-Left'] : styles['product-Right'],
        ]}
      >
        <Image
          style={styles.image}
          source={{ uri: product.image }}
        />

        <View style={styles.details}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.price}>R${new Intl.NumberFormat('pt-br').format(product.price)}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect()(ProductItem);
