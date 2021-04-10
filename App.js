import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import ScheduleScreen from './screens/ScheduleScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <View>
      <AppContainer />
      
    </View>
  );
  }

var AppNavigator = createSwitchNavigator({
  ScheduleScreen: ScheduleScreen,
  WelcomeScreen: WelcomeScreen
})

const AppContainer = createAppContainer(AppNavigator)