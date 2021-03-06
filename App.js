import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { Constants } from 'expo';
import Colors from './Colors';
import LoadingScreen from './LoadingScreen';
import RestaurantMap from './RestaurantMap';
import RestaurantList from './RestaurantList';

const GOOGLE_PLACES_API_KEY = 'AIzaSyCzqO7J9gx9dXiFEj0FgsJ6f2FoRBC4YXY';

const DEFAULT_MAP_REGION_DELTA = 0.025;

// Lat: 39.997308
// Lng: -83.036152

function placeSearchUrl(latitude, longitude, keyword = '', radius = 2000) {
  return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&keyword=${keyword}&key=${GOOGLE_PLACES_API_KEY}`;
}

/*
 * 1. Show Loading animation until we have current location
 * 2. Once we have the current location (lat/lng), show on Map
 * 3. Search for pizza restaurants nearby
 * 4. Show list of restuarants underneath map
 * 5. Add pins to map
 */

export default class App extends Component {
  state = {
    mapLoading: true,
    mapRegion: null,
    isSearching: false,
    restaurantResults: []
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.setState({
          mapRegion: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            latitudeDelta: DEFAULT_MAP_REGION_DELTA,
            longitudeDelta: DEFAULT_MAP_REGION_DELTA
          },
          mapLoading: false
        });
      },
      (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000 }
    );
  }

  render() {
    if (this.state.mapLoading) {
      return null;
    } else {
      return (
        <View style={styles.container}>
          <RestaurantMap
            region={this.state.mapRegion}
            onRegionChangeComplete={this.handleMapRegionChange}
            restaurants={this.state.restaurantResults} />
          <Text>{ this.displayMapCoordinates() }</Text>
          <Button
            onPress={this.searchForPizzaRestaurants}
            disabled={this.state.isSearching}
            title={this.state.isSearching ? "Searching..." : "Find Me Some Pizza!"}
            style={styles.buttonStyles}
            color={Colors.blue} />
          { this.state.isSearching ? <ActivityIndicator /> : <RestaurantList restaurants={this.state.restaurantResults} /> }
        </View>
      );
    }
  }

  handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion: mapRegion });
    // this.searchForRestaurants(mapRegion.latitude, mapRegion.longitude);
  };

  searchForPizzaRestaurants = () => {
    var url = placeSearchUrl(this.state.mapRegion.latitude, this.state.mapRegion.longitude, 'pizza');
    this.setState({ isSearching: true }, function() {
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({ isSearching: false, restaurantResults: responseJson.results });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  displayMapCoordinates() {
    var r = 10000;
    return `Lat: ${(Math.round(this.state.mapRegion.latitude * r) / r)}, Lng: ${(Math.round(this.state.mapRegion.longitude * r) / r)}`;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.bgColor,
  }
});
