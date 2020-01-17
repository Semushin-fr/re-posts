import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'
import { BookedScreen } from '../screens/BookedScreen'
import {AboutScreen} from "../screens/AboutScreen";
import {CreateScreen} from "../screens/CreateScreen";

const navigatorOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
    }
}

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: PostScreen,
}, navigatorOptions)

const BookedNavigator = createStackNavigator({
    Booked: BookedScreen,
    Post: PostScreen
}, navigatorOptions)

const BottomTabConfig = {
    PostTab: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarIcon: (info) => <Ionicons name='ios-albums' size={25} color={ info.tintColor } />,
            tabBarLabel: 'Все'
        }
    },
    BookedTab: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarIcon: (info) => <Ionicons name='ios-star' size={25} color={ info.tintColor }/>,
            tabBarLabel: 'Избранное'
        }
    }
}

const AboutNavigator = createStackNavigator({
    About: AboutScreen
}, navigatorOptions)

const CreateNavigator = createStackNavigator({
    Create: CreateScreen
}, navigatorOptions)

const BottomNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(BottomTabConfig, {
            activeTintColor: '#fff',
            shifting: true,
            barStyle: {
                backgroundColor: THEME.MAIN_COLOR
            }
        })
        : createBottomTabNavigator(
        BottomTabConfig, {
            tabBarOptions: {
                activeTintColor: THEME.MAIN_COLOR
            }
        })

const MainNavigator = createDrawerNavigator({
    PostTabs: {
        screen: BottomNavigator,
        navigationOptions: {
            drawerLabel: 'Главная'
        }
    },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            drawerLabel: 'О приложении'
        }
    },
    Create: {
        screen: CreateNavigator,
        navigationOptions: {
            drawerLabel: 'Создать пост'
        }
    }
}, {
    contentOptions: {
        activeTintColor: THEME.MAIN_COLOR,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})



export const AppNavigation = createAppContainer(MainNavigator)
