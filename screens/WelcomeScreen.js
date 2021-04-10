import React, { Component } from 'react';
import { View,
         StyleSheet,
         Text,
         TextInput,
         Image,
         Modal,
         KeyboardAvoidingView,
         TouchableOpacity,
         Alert,
         ScrollView } from 'react-native'
import {Icon} from 'react-native-elements'
import firebase from 'firebase'

import db from 'config.js'

export default class WelcomeScreen extends Component {
    constructor(){
        super();
        this.state = {
            emailId         : "",
            firstName       : "",
            lastName        : "",
            confirmPassword : "",
            isModalVisible  : false
        };
    }
    userSignUp = (emailId, password, confirmPassword) => {
        if(password !== confirmPassword) {
            return Alert.alert("Password doesn't Match\nCheck Your Password")
        } else {
            firebase.auth().createUserWithEmailAndPassword(emailId, password)
            .then(() => {
                db.collection("users").add({
                    first_name  :   this.state.firstName,
                    last_name   :   this.state.lastName,
                    email_Id    :   emailId,
                });
                return Alert.alert("You Have Been Successfully Added", "" , [{
                    text:"OK!",
                    onPress : () => this.setState({isModalVisible: false})
                }])
               })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    return Alert.alert(errorMessage);
            })
        }
    };

userLogin = (emailId, password) => {
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(() => {

    })
    return Alert.alert("Welcome Back","",[{
        text:"Ok!"
        onPress : () => this.props.navigation.navigate('ScheduleScreen')
    }])
    .catch((error) => {
        var errCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
    });
};

showModal = () => {
    return(
        <Modal
         animationType="slide"
         transperant={true}
         visible={this.state.isModalVisible}
        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.signUpView}>
                    <Text style={styles.signUpText}> SIGN UP</Text>
                </View>
                    <View style={{flex:0.5}}>
                        <Text style={styles.label}>First Name</Text>
                        <TextInput
                        style={styles.formInput}
                        placeholder={"First Name"}
                        maxLength={13}
                        onChangeText={(text) => {
                            this.setState({
                                firstName: text
                            })
                        }}/>
                        <Text style={styles.label}> Last Name</Text>
                        <TextInput
                         style={styles.formInput}
                         placeholder={"Last Name"}
                         maxLength={13}
                         onChangeText={(text) => {
                             this.setState({
                                 lastName:text
                             })
                         }} />
                        <Text style={styles.label}>Email Id</Text>
                        <TextInput
                         style={style.formInput}
                         placeholder={"Email Id"}
                         keyboardType={'email-address'}
                         onChangeText={
                             this.setState({
                                 emailId: text
                             })
                         }
                        />
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                         style={StyleSheet.formInput}
                         placeholder={"Password"}
                         onChangeText={(text) => {
                             this.setState({
                                 password : text
                             })
                         }} />
                         <Text style={styles.label}>Confirm Password</Text>
                         <TextInput
                          style={styles.formInput}
                          placeholder={"Confirm Password"}
                          onChangeText={(text) => {
                              this.setState({})
                          }} />
                    </View>

                    <View style={{flex : 0.2, alignItems:'center', alignSelf:'center'}}>
                        <TouchableOpacity 
                         style={styles.registerButton}
                         onPress={() => {
                             this.userSignUp(
                                 this.state.emailId,
                                 this.state.password,
                                 this.state.confirmPassword
                             )
                         }} >
                            <Text style={styles.registerButtonTxt}>Register Me!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                         style={styles.cancelButton}
                         onPress={() => {
                             this.setState({
                                 isModalVisible : false
                             })
                         }} >
                            <Text style={styles.cancelButtonTxt}>Cancel Registration</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        </Modal>
    )
}



    render(){
        return(
            <View>
                <View>{this.showModal}</View>
                <View style={styles.textInput}>
                    <TextInput
                     style={styles.loginbox}
                     placeholder={"Email Address"}
                     keyboardType={'email-address'}
                     onVhangeText = {(text) => {
                         this.setState({
                             emailId : text
                         })
                     }} />
                    <TextInput
                     style = {styles.loginbox}
                     placeholder={"Password"}
                     onChangeText = {(text) => {
                         this.setState({
                             password : text
                         })
                     }} />
                    <TextInput 
                     style = {styles.loginbox}
                     placeholder={"Retype Password"}
                     onChangeText = {(text) => {
                         this.setState({
                             confirmPassword : text
                         })
                     }} />
                     </View>
                     <View>
                    <TouchableOpacity
                     style = {styles.signUpButton}
                     onPress = {() => {
                         this.userLogin(
                             this.state.emailId,
                             this.state.password
                         )
                     }}
                     >
                        <Text style = {styles.buttontxt}>LogIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                     style= {styles.button}
                     onPress = {() => this.setState({
                         isModalVisible : true
                     })}>
                        <Text> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6fc0b8",
      },
      loginBox: {
        width: "80%",
        height: RFValue(50),
        borderWidth: 1.5,
        borderColor: "#ffffff",
        fontSize: RFValue(20),
        paddingLeft: RFValue(10),
      },
      button: {
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom:RFValue(10),
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
      },
      buttonText: {
        color: "#32867d",
        fontWeight: "200",
        fontSize: RFValue(20),
      },
      label:{
        fontSize:RFValue(13),
        color:"#717D7E",
        fontWeight:'bold',
        paddingLeft:RFValue(10),
        marginLeft:RFValue(20)
      },
      formInput: {
        width: "90%",
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth:1,
        borderRadius:2,
        borderColor:"grey",
        paddingBottom:RFValue(10),
        marginLeft:RFValue(20),
        marginBottom:RFValue(14)
      },
      registerButton: {
        width: "75%",
        height: RFValue(50),
        marginTop:RFValue(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(3),
        backgroundColor: "#32867d",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: RFValue(10),
      },
      registerButtonTxt: {
        fontSize: RFValue(23),
        fontWeight: "bold",
        color: "#fff",
      },
      cancelButtonTxt:{
        fontSize : RFValue(20),
        fontWeight:'bold',
        color: "#32867d",
        marginTop:RFValue(10)
      },
      scrollView:{
        flex: 1,
        backgroundColor: "#fff"
      },
    TextInput:{
      flex:0.5,
      alignItems:"center",
      justifyContent:"center"
    },
})