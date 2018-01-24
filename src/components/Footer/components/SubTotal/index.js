import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import { CartItem } from 'components/CartList/components/CartItem';

import { connect } from 'react-redux';

import styles from './styles';

class SubTotal extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      data: PropTypes.arrayOf(CartItem.propTypes.product),
    }).isRequired,
  };

  renderTotal = () => {
    const { cart } = this.props;

    let total = 0;
    cart.data.map(product => total += product.price * product.quantity);

    return (
      <Text style={styles.total}>R${new Intl.NumberFormat('pt-br').format(total)}</Text>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Subtotal</Text>
        { this.renderTotal() }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(SubTotal);

