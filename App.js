import React from 'react';
import { StyleSheet} from 'react-native';
import Home from './components/Home'
import BookMenu from './components/BookMenu'
import { Constants } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const RootStack = createStackNavigator(
  {
    Home: Home,
    Details: BookMenu,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

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
