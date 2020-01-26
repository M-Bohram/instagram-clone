import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import { Icon } from "native-base";

import HomeTab from "./AppTabNavigator/HomeTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";

class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <AppTabNavigator />;
  }
}

export default MainScreen;

const TabNavigator = createMaterialTopTabNavigator(
  {
    HomeTab: HomeTab,
    SearchTab: SearchTab,
    AddMediaTab: AddMediaTab,
    LikesTab: LikesTab,
    ProfileTab: ProfileTab
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      indicatorStyle: {
        backgroundColor: "white"
      },
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: "white"
      }
    }
  }
);

const AppTabNavigator = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "300",
    color: "black"
  }
});
