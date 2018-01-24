import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, ScrollView } from 'react-native';
import Header from 'components/Header';
import FiltersComponent, { Filters } from 'components/Filters';
import ProductList from 'components/ProductList';
import { ProductItem } from 'components/ProductList/components/ProductItem';

// Redux
import { connect } from 'react-redux';
import ProductListActions from 'store/ducks/products-list';
import FiltersActions from 'store/ducks/filters';

import styles from './styles';

class Home extends Component {
  static propTypes = {
    filtersRequest: PropTypes.func.isRequired,
    filters: PropTypes.shape({
      data: Filters.propTypes.filters,
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,

    productsRequest: PropTypes.func.isRequired,
    productsList: PropTypes.shape({
      data: PropTypes.arrayOf(ProductItem.propTypes.product),
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.filtersRequest();
    this.props.productsRequest(null);
  }

  render() {
    const { productsList, filters } = this.props;
    return (
      <View style={styles.container}>
        <Header title="GoCommerce" />

        <FiltersComponent
          filters={filters.data}
          loading={filters.loading}
          error={filters.error}
        />

        <ScrollView style={styles.container}>
          <ProductList
            products={productsList.data}
            loading={productsList.loading}
            error={productsList.error}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
  productsList: state.productsList,
});

const mapDispatchToProps = dispatch => ({
  filtersRequest: () => dispatch(FiltersActions.filtersRequest()),
  productsRequest: filter => dispatch(ProductListActions.productsRequest(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
