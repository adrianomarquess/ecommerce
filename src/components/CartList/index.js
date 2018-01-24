import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import CartItemComponent, { CartItem } from './components/CartItem';

import styles from './styles';

export default class CartList extends Component {
  static propTypes = {
    cart: PropTypes.arrayOf(CartItem.propTypes.product).isRequired,
  };

  renderCart = () => (
    this.props.cart.map(product => (
      <CartItemComponent
        key={product.id}
        product={product}
      />
    ))
  );

  render() {
    return (
      <View style={styles.cartContainer}>
        {
          this.props.cart.length > 0
          ? this.renderCart()
          : <Text style={styles.empty}>Seu carrinho está vazio</Text>
        }
      </View>
    );
  }
}
