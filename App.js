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
  },
  menuContainer: {
    flex: 1,
    margin: 20,
  },
  itemsMenu: {
    flex: 1,
    backgroundColor: 'rgba(63, 74, 150, 0.17)',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10
  },
  item: {
    fontSize: 25,
    color: 'white',
    paddingLeft:16
  }
});
