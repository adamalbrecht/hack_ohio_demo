import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import Colors from './Colors';

export default class RestaurantList extends Component {

  static propTypes = {
    restaurants: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  }

  render() {
    if (this.props.restaurants.length == 0) {
      return null;
    } else {
      return (
        <View style={styles.listContainer}>
          <ScrollView scrollEventThrottle={16}>
            { this.props.restaurants.map((r, i) => <RestaurantView key={i} restaurant={r} /> )}
          </ScrollView>
        </View>
      );
    }
  }
}

class RestaurantView extends Component {
  static propTypes = {
    restaurant: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      opening_hours: React.PropTypes.shape({
        open_now: React.PropTypes.bool.isRequired
      })
    }).isRequired
  }

  render() {
    var openNow = (this.props.restaurant.opening_hours && this.props.restaurant.opening_hours.open_now);

    return (
      <View style={styles.result}>
        <Text style={styles.resultTitle}>{this.props.restaurant.name}</Text>
        { openNow && <Text style={styles.resultOpenNow}>Open Now!</Text> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    borderTopWidth: 2.0,
    borderTopColor: Colors.borderColor
  },
  result: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.borderColor,
  },
  resultTitle: {
    fontWeight: 'bold',
  },
  resultOpenNow: {
    color: Colors.red,
    position: 'absolute',
    top: 10,
    right: 5,
  }
})
