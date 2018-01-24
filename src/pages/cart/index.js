import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, ScrollView } from 'react-native';
import Header from 'components/Header';
import CartList from 'components/CartList';

// Redux
import { connect } from 'react-redux';
import CartActions from 'store/ducks/cart';

import styles from './styles';

class Cart extends Component {
  static propTypes = {
    cartRequest: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      data: CartList.propTypes.cart,
    }).isRequired,
  };

  componentDidMount() {
    this.props.cartRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Carrinho" />

        <ScrollView style={styles.container}>
          <CartList
            cart={this.props.cart.data}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  cartRequest: () => dispatch(CartActions.cartRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
