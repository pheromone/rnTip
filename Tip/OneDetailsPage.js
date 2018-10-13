/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LCCountDownButton from './LCCountDownButton'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class OneDetailsPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>倒计时</Text>
                <LCCountDownButton
                    txtStyle={{color:'#7c7c7a'}}
                    beginText='| 获取验证码'
                    endText='再次获取验证码'
                    count={60}
                    maxLength={6}
                    pressAction={()=>{this.getverificationCodeAction()}}
                    changeWithCount={(count)=> count + 's后重新获取'}
                    id='login'
                    ref={(e)=>{this.countDownButton=e}}
                />
            </View>
        );
    }

    getverificationCodeAction =() =>{
        this.countDownButton.startCountDown()  //开始倒计时
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
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
});
