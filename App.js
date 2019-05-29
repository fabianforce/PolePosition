import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Toolbar from './components/Toolbar';
import UserHeader from './components/UserHeader';
import Menu from './components/Menu';
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
      <View style={styles.statusBar} />
        <Toolbar />
        <UserHeader/>
        <Menu/> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: "#181a29"
  },
  statusBar: {
    backgroundColor: "#181a29",
    height: Constants.statusBarHeight,
  }
});
