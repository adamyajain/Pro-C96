import React, { Component } from 'react';
import { View,
         StyleSheet,
         FlatList, 
         TextInput,
         TouchableOpacity,
         Alert,
         Text,
         ScrollView} from 'react-native'
import { Icon, Header, Input } from 'react-native-elements'

export default class WelcomeScreen extends Component {
    constructor(){
        super();
        this.state = {
            newItem : "",
            currentList : []
        }
    }

    addItem = (text) => {
        if(text != ''){
            const newItemJSON = {
                id: 1 + Math.random(),
                value : text
            }

            const list = this.state.currentList;
            list.push(newItemJSON)
            this.setState({
                currentList  : list,
                newItem : ''
            })

        }else{
            Alert.alert("Please Enter A Valid Activity")
        }
    }

    render(){
        return(
        <View>
            <View>
                <Header title=  {"Schedule"} />
            </View>
            <View>
                <TextInput
                 placeholder = {"Enter Activity Name Here"}
                 style={styles.txtinput}
                 onChangeText = {(text) => {
                     this.setState({
                         newItem : text
                     })
                 }}
                  />

                  <TouchableOpacity
                   style = {styles.button}
                   onPress = {this.addItem(this.state.newItem)} 
                  >
                      <Text>Add Actvity!</Text>
                  </TouchableOpacity>
            </View>
            <ScrollView>

            </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({})