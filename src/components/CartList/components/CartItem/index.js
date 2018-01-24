import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProductItem } from 'components/ProductList/components/ProductItem';

// Redux
import { connect } from 'react-redux';
import CartActions from 'store/ducks/cart';

import styles from './styles';

export class CartItem extends Component {
  static propTypes = {
    product: PropTypes.shape({
      ...ProductItem.propTypes.product,
      quantity: PropTypes.number,
    }).isRequired,
    cartRemove: PropTypes.func.isRequired,
    cartUpdate: PropTypes.func.isRequired,
  };

  remove = (product) => {
    this.props.cartRemove(product);
  }

  updateQtd = (product, text) => {
    const quantity = Number(text);

    if (quantity || quantity > 0) {
      this.props.cartUpdate({
        ...product,
        quantity,
      });
    }
  }

  render() {
    const { product } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.image }}
        />

        <View style={styles.productInfo}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.price}>R${new Intl.NumberFormat('pt-br').format(product.price)}</Text>
        </View>

        <View style={styles.productQuantity}>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            defaultValue={String(product.quantity)}
            onChangeText={quantity => this.updateQtd(product, quantity)}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.remove(product)}
          >
            <Icon name="times" size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  cartRemove: product => dispatch(CartActions.cartRemove(product)),
  cartUpdate: (product, qtd) => dispatch(CartActions.cartUpdate(product, qtd)),
});

export default connect(null, mapDispatchToProps)(CartItem);
