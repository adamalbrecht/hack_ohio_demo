import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Constants } from 'expo';

export default class LoadingScreen extends Component {
  static propTypes = {
    text: React.PropTypes.string
  }

  static defaultProps = {
    text: 'Loading...'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>{ this.props.text }</Text>
        <ActivityIndicator size='large' />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  },
  loadingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray'
  }
})
