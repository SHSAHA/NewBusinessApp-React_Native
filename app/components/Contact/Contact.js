import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
var s = require('../../style');

export default class Contact extends Component {
  doSomething(){

  }

  render() {
    return (
      <View>
        <Text style={s.heading}>Contact Us</Text>
          <View style={{padding: 10}}>
            <TextInput
              style={{height: 40}}
              placeholder="Enter Name"
            />
            <TextInput
              style={{height: 40}}
              placeholder="Enter Email"
            />
            <TextInput
              style={{height: 40}}
              placeholder="Optional Message"
            />
            <Button
              title="Submit"
              color="#841584"
              onPress={this.doSomething}
            />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Contact', () => Contact);
