import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class RestaurantList extends Component {

  static propTypes = {
    restaurants: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  }

  render() {
    return (
      <View>
        <View>
          { this.props.restaurants.map((r, i) => <RestaurantView key={i} restaurant={r} /> )}
        </View>
      </View>
    );
  }
}

class RestaurantView extends Component {
  static propTypes = {
    restaurant: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
    }).isRequired
  }

  render() {
    return (
      <View style={styles.restaurant}>
        <Text>{this.props.restaurant.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {

  },
  restaurant: {

  }
})
