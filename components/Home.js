import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Toolbar from './Toolbar';
import UserHeader from './UserHeader';
import Menu from './Menu'
import { Constants } from 'expo';


export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#181a29',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={styles.mainContainer}>
      <View style={styles.statusBar} />
        <Toolbar />
        <UserHeader/>
        <Menu myNavigation = {this.props.navigation}/>
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
