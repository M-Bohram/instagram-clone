import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
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
import CardComponent from "../CardComponent";
import { ScrollView } from "react-native-gesture-handler";

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="camera" />
          </Left>
          <Body>
            <Title>Instagram</Title>
          </Body>
          <Right>
            <Icon name="send" />
          </Right>
        </Header>
        <Content>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 7,
                marginTop: 5
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Stories</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="md-play" style={{ fontSize: 20, marginRight: 5 }} />
                <Text style={{ fontWeight: "bold" }}>Watch all</Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingStart: 5,
                  paddingEnd: 5,
                  alignItems: "center"
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/1.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/2.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/3.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/1.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/2.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/3.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/1.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/2.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/3.jpg")}
                />
              </ScrollView>
            </View>
          </View>

          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="201" />
          <CardComponent imageSource="3" likes="301" />
        </Content>
      </Container>
    );
  }
}
// imageSource="3" likes="301"
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

