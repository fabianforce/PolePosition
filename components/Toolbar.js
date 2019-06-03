import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

export default class Toolbar extends Component {
  render() {
    return (
        <View style={ styles.toolbar }>
        <Image source={require('../alarm.png')}
         style={styles.alarmImg} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    alignItems: 'flex-end',
    backgroundColor: "#181a29",
  },
  alarmImg: {
    margin: 16,
    width: 30,
    height: 30,
  },
})
