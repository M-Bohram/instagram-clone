// In App.js in a new project

import React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import MainScreen from './components/MainScreen';


const AppNavigator = createStackNavigator({
  Home: MainScreen
});

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;