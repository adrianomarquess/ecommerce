import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux';
import FiltersActions from 'store/ducks/filters';
import ProductListActions from 'store/ducks/products-list';

import styles from './styles';

export class FilterItem extends Component {
  static propTypes = {
    filter: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    filters: PropTypes.shape({
      filterSelected: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }),
    }).isRequired,
    index: PropTypes.number.isRequired,
    setFilter: PropTypes.func.isRequired,
    productsRequest: PropTypes.func.isRequired,
  };

  setFilter = (filter) => {
    this.props.setFilter(filter);
    this.props.productsRequest(filter);
  };

  render() {
    const { filter, index } = this.props;
    const { filterSelected } = this.props.filters;

    let filterActive = {};
    if (filterSelected) {
      filterActive = (filterSelected.id === filter.id) && styles.filterItemActive;
    }

    return (
      <TouchableOpacity
        onPress={() => this.setFilter(filter)}
        activeOpacity={0.7}
        style={[
          styles.filterItem,
          (index === 0) ? styles['filterItem-first'] : {},
          filterActive,
        ]}
      >
        <Text style={styles.filterTitle}>
          {filter.title.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(FiltersActions.setFilter(filter)),
  productsRequest: filter => dispatch(ProductListActions.productsRequest(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
