import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './modules/Splash'

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js sdf to start working on your app!</Text>
      // </View>
      <Splash/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
