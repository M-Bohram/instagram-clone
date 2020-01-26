import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { EntypoIcon } from "react-native-vector-icons/Entypo";
import {
  Icon,
  Container,
  Content,
  Header,
  Thumbnail,
  Left,
  Right,
  Body,
  Title
} from "native-base";

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor="blue"
          style={{ backgroundColor: "blue" }}
        >
          <Left />
          <Body>
            <Title>Mostafa Bohram</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ backgroundColor: "white" }}>
          <View style={styles.container}>
            <Text>Hello world</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

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
