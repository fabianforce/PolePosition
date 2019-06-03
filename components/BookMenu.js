import React from 'react';
import { StyleSheet, View } from 'react-native';
export default class BookMenu extends React.Component {
  static navigationOptions = {
    title: 'My Bookings',
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
      <View style={styles.container}>
        
      </View>
    );
  }
}
class BookMenu1 extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          
        </View>
      );
    }
  }

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    backgroundColor: "#181a29",
    padding: 5
  },
});
