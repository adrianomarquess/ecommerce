import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Redux
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { colors } from 'styles';
import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    backEnabled: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    backEnabled: false,
  };

  navigateBack = () => {
    const { dispatch } = this.props;
    return dispatch(NavigationActions.back());
  };

  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.leftButton}>
          {
            this.props.backEnabled &&
            <TouchableOpacity onPress={this.navigateBack}>
              <Icon name="angle-left" size={22} color={colors.regular} />
            </TouchableOpacity>
          }
        </View>

        <Text style={styles.title}>{this.props.title}</Text>

        <View style={styles.rightHidden} />
      </View>
    );
  }
}

export default connect()(Header);
