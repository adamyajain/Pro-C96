import React,{ Component } from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingsScreen';
import ScheduleScreen from '../screens/ScheduleScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Sechedule  : {
        screen : ScheduleScreen
    },
    Settings : {
        screen : SettingScreen
    }
},{
    contentComponent : CustomSideBaMenu
},
{
    initialRouteName  : 'Home'
}
)