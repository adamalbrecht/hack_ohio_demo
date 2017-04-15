import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { MapView } from 'expo';
import Colors from './Colors';
import MapView from 'react-native-maps';

export default class RestaurantMap extends Component {
  static defaultProps = {
    restaurants: []
  }

  render() {
    var markers = this.props.restaurants.map((r, idx) => {
      var lat = r.geometry.location.lat;
      var lng = r.geometry.location.lng;
      return (
        <MapView.Marker
          key={idx}
          name={r.name}
          description={r.name}
          coordinate={{ latitude: lat, longitude: lng }} />
      )
    });
    return (
      <MapView
        region={this.props.region}
        style={styles.mapStyles}
        onRegionChangeComplete={this.props.onRegionChangeComplete}>
        { markers }
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapStyles: {
    alignSelf: 'stretch',
    height: 200,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: Colors.borderColor
  }
})
