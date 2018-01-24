import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import FiltersActions from 'store/ducks/filters';

import { View, ScrollView, ActivityIndicator } from 'react-native';
import FilterItemComponent, { FilterItem } from './components/FilterItem';

import styles from './styles';

export class Filters extends Component {
  static propTypes = {
    filters: PropTypes.arrayOf(FilterItem.propTypes.filter).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  renderFilters = () => (
    this.props.filters.map((filter, index) => (
      <FilterItemComponent
        key={filter.id}
        filter={filter}
        index={index}
      />
    ))
  );

  render() {
    return (
      <View style={styles.filterContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          { this.props.loading
            ? <ActivityIndicator size="small" color="#FFF" />
            : this.renderFilters()
          }
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setFilter: (filters, filter) => dispatch(FiltersActions.setFilter(filters, filter)),
});

export default connect(null, mapDispatchToProps)(Filters);
