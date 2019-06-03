import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Constants } from 'expo';

export default class UserHeader extends React.Component {
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
        <View style={styles.buttonContainer}>
            <Image source={{uri: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'}}
            style={styles.userimg} />
        </View>
        <View style={styles.bookingsContainer}>
            <Text style={styles.userText}>Hey, Itzel</Text>
            <Text style={styles.subText}>Bookings this week</Text>
            <Text style={styles.scoreText}>5</Text>
        </View>
        <View style={styles.bookingsComContainer}>
            <Text style={styles.subText}>Bookings Completed</Text>
            <Text style={styles.scoreText}>17</Text>
        </View>
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
  buttonContainer: {
    flex: 1,
    alignItems:'center',
  },
  bookingsContainer: {
    flex: 1,
  },
  bookingsComContainer:
  {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
  userimg: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userText: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold',
  },
  subText: {
    color: '#6E6F7E'
  },
  scoreText: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold',

  },
});
