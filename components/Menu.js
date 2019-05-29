import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Constants } from 'expo';

export default class Menu extends React.Component {
  render() {
    return (
        <View style={styles.menuContainer}>
            <View style={styles.itemsMenu}>
             <Image style={{
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderRadius: 10,
                justifyContent: 'center',
                }} source={require('../par.jpg')}/>
             <Text style={styles.item}>My Bookings</Text>
            </View>
            <View style={styles.itemsMenu}>
             <Image style={{
                flex: 1,
                 position: 'absolute',
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderRadius: 10,
                justifyContent: 'center',
                }} source={require('../open.jpg')}/>
             <Text style={styles.item}>Find Bookings</Text>
            </View>
            <View style={styles.itemsMenu}>
             <Text style={styles.item}>Maps & Venues</Text>
            </View>
            <View style={styles.itemsMenu}>
             <Text style={styles.item}>Conversations</Text>
            </View>
            <View style={styles.itemsMenu}>
             <Text style={styles.item}>Classes</Text>
            </View>
            <View style={styles.itemsMenu}>
             <Text style={styles.item}>My cities</Text>
            </View>
        </View>
    
    );
  }
}
const styles = StyleSheet.create({

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
