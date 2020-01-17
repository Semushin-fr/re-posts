import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const AboutScreen = () => {
    return (
        <View style={ styles.center }>
            <Text>Это лучшее приложение для личных заметок</Text>
            <Text>Версия приложения <Text style={ styles.versions }>1.0.0</Text></Text>
        </View>
    )
}

AboutScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'О приложении',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
                <Item
                    title='Take photo'
                    iconName='ios-menu'
                    onPress={ () => navigation.toggleDrawer() }
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    versions: {
        fontFamily: 'open-sans-bold'
    }
})
