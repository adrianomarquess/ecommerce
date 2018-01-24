import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, ActivityIndicator } from 'react-native';
import ProductItemComponent, { ProductItem } from './components/ProductItem';

import styles from './styles';

export default class ProductList extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(ProductItem.propTypes.product).isRequired,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    loading: false,
  };

  renderProducts = () => (
    this.props.products.map((product, index) => (
      <ProductItemComponent
        key={product.id}
        index={index}
        product={product}
      />
    ))
  );

  render() {
    return (
      <View style={styles.productsContainer}>
        {
          this.props.loading
          ? <ActivityIndicator size="small" color="#000" style={styles.loading} />
          : this.renderProducts()
        }
      </View>
    );
  }
}
