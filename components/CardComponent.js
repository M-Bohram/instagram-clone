import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Icon, Button } from 'native-base';

class CardComponent extends Component {

    render() {

        const images = {
            "1": require('../assets/1.jpg'),
            "2": require('../assets/2.jpg'),
            "3": require('../assets/3.jpg')
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail 
                        source={images[this.props.imageSource]}
                         />
                         <Body>
                             <Text>Mostafa</Text>
                             <Text note>14th of July, 2019</Text>
                         </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]}
                    style={{ height: 200, flex: 1}}/>
                </CardItem>
                <CardItem style={{height: 45}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart"
                            style={{ color: "black"}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" 
                            style={{ color: "black"}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" 
                            style={{ color: "black"}} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{ height: 20 }}>
                    <Left>
                        <Text>{this.props.likes}</Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{fontWeight: "900"}}>Mostafa </Text>
                            This is a new Text ddanjk mh gofdgdfg dasdm lrgdm ald 
                            gdgdfj mfgkd o fdmf dlfm fg fg sd, fsdf mhgf s dfs 
                            fsdf hgf dk mgofdg fontStylen df dsfd gg 
                            df sdfsdf dasdjns kdsad alksd 
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default CardComponent;