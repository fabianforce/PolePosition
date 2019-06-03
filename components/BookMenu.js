import React from 'react';
import { StyleSheet, View } from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from '../src/reducers' //react knows that is the index.js file 
import ItemList from './ItemList'

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
      <Provider store={createStore(reducers)}>
        <View>
          <ItemList/>
        </View>
      </Provider>
    );
  }
}
