import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import Header from 'components/Header';
import { ProductItem } from 'components/ProductList/components/ProductItem';

import Toast from 'react-native-simple-toast';

// Redux
import { connect } from 'react-redux';
import CartActions from 'store/ducks/cart';

import styles from './styles';

class Detail extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          product: PropTypes.shape(ProductItem.propTypes.product),
        }),
      }),
    }).isRequired,
  };

  add = async (product) => {
    const productAdd = { ...product, quantity: 1 };
    await this.props.cartAdd(productAdd);

    const { cart } = this.props;
    Toast.show(cart.msg, 1);
  };

  render() {
    const { product } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Header title="Detalhes do Produto" backEnabled />

        <ScrollView style={styles.productContainer}>
          <View style={styles.product}>
            <Image
              style={styles.image}
              source={{ uri: product.image }}
            />

            <View style={styles.informationContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.brand}>{product.brand}</Text>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.price}>R${new Intl.NumberFormat('pt-br').format(product.price)}</Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={() => this.add(product)}
            >
              <Text style={styles.buttonTitle}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  cartAdd: product => dispatch(CartActions.cartAdd(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
