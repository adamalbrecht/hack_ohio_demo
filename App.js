// ======= TODO =============
/*
 * 1. Load current location using GPS
 * 2. Display map coordinates
 * 3. Map of current location
 * 4. Add a button to search for Pizza restaurants on Google
 * 5. Show list of results
 * 6. Show results on the map
 */


import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { Constants } from 'expo';
import Colors from './Colors';
// import LoadingScreen from './LoadingScreen';
// import RestaurantMap from './RestaurantMap';
// import RestaurantList from './RestaurantList';

export default class App extends Component {
  state = {
    mapLoading: true,
    mapRegion: null,
    isSearching: false,
    restaurantResults: []
  };

  componentDidMount() {

  }

  render() {
    if (this.state.mapLoading) {
      return null;
    } else {
      return (
        <View style={styles.container}>
          <Text style={{fontWeight: 'bold'}}>Blank Application</Text>
        </View>
      );
    }
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

// ----- 4C ------
// const GOOGLE_PLACES_API_KEY = 'AIzaSyCzqO7J9gx9dXiFEj0FgsJ6f2FoRBC4YXY';
// function placeSearchUrl(latitude, longitude, keyword = '', radius = 2000) {
//   return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&keyword=${keyword}&key=${GOOGLE_PLACES_API_KEY}`;
// }


// componentDidMount

    // ------- 1 ---------
    // navigator.geolocation.getCurrentPosition(
    //   (pos) => {
    //     this.setState({
    //       mapRegion: {
    //         latitude: pos.coords.latitude,
    //         longitude: pos.coords.longitude,
    //         latitudeDelta: 0.025,
    //         longitudeDelta: 0.025
    //       },
    //       mapLoading: false
    //     });
    //   },
    //   (error) => alert(JSON.stringify(error)),
    //   { enableHighAccuracy: true, timeout: 20000 }
    // );


// render

          // ----- 3A ------
          // <RestaurantMap
          //   region={this.state.mapRegion}
          //   onRegionChangeComplete={this.handleMapRegionChange}
          //   restaurants={this.state.restaurantResults} />
          // ----- 2A ------
          // <Text>{ this.displayMapCoordinates() }</Text>
          // ----- 4A ------
          // <Button
          //   onPress={this.searchForPizzaRestaurants}
          //   disabled={this.state.isSearching}
          //   title={this.state.isSearching ? "Searching..." : "Find Me Some Pizza!"}
          //   style={styles.buttonStyles}
          //   color={Colors.blue} />
          // ----- 5 ------
          // { this.state.isSearching ? <ActivityIndicator /> : <RestaurantList restaurants={this.state.restaurantResults} /> }


// Helper Methods

  // ------- 3B -------
  // handleMapRegionChange = mapRegion => {
  //   this.setState({ mapRegion: mapRegion });
  // };

  // ------- 4B -------
  // searchForPizzaRestaurants = () => {
  //   var url = placeSearchUrl(this.state.mapRegion.latitude, this.state.mapRegion.longitude, 'pizza');
  //   this.setState({ isSearching: true }, function() {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         this.setState({ isSearching: false, restaurantResults: responseJson.results });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   });
  // }

  // ------ 2B ---------
  // displayMapCoordinates() {
  //   var r = 10000;
  //   return `Lat: ${(Math.round(this.state.mapRegion.latitude * r) / r)}, Lng: ${(Math.round(this.state.mapRegion.longitude * r) / r)}`;
  // }










// Lat: 39.997308
// Lng: -83.036152
