/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import TwoPage from './Tip/TwoPage';
import OnePage from './Tip/OnePage';
import OneDetailsPage from './Tip/OneDetailsPage'
import TwoDetailsPage from './Tip/TwoDetailsPage'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class TwoDetails extends Component<Props> {
    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        // 只要切换tab,push,pop,这里一定走
                        console.log(prevState)
                        console.log(currentState)

                    }
                }
            />
        );
    }

    componentDidMount() {
        console.disableYellowBox = true;
    }
}


const Tab = TabNavigator({
        OnePage: {
            screen: OnePage,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '苹果',
            }),
        },
        TwoPage: {
            screen: TwoPage,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '安卓',
            }),
        },

    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#979797',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },

    });

const Navigator = StackNavigator({
    Tab: {
        screen: Tab,
    },
    OneDetailsPage : {
        screen: OneDetailsPage,
    },
    TwoDetailsPage:{
        screen:TwoDetailsPage
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})