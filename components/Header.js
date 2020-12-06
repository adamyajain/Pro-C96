import React, { Component } from 'react';
import { View,
         Text,
         StyleSheet,
         Alert } from 'react-native'
import { Header,
         Icon,
         Badge} from 'react-native-elements'

export default class WelcomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }



    render(){
        return(
            <View>
                <Header 
                 centerComponent = {{text: this.props.title,
                                     style : {color : '#FFFFFF', 
                                              fontSize : 20 , 
                                              fontWeight : "bold"}}}
                 backgroundColor = "#2089DC"
                />
            </View>
        )
    }
}
