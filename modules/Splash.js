import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello </Text>
        <Image style={{ flex: 1, resizeMode: "cover", }} source={require('../assets/icon.png')} />

      </View>
    );
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  logo :{

  }
});