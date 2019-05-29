import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Switch,
  ToolbarAndroid
} from 'react-native';
var s = require('./app/style');

import Home from './app/components/Home/Home';
import About from './app/components/About/About';
import Contact from './app/components/Contact/Contact';

export default class businessapp extends Component {
  constructor(){
    super();
    this.state = {
      logoHidden: false
    }
  }

  render() {
    let logoHidden = this.state.logoHidden;
    let img = <Text></Text>;
    if(logoHidden){
      img = <Text></Text>;
    } else {
      img = <Image style={s.image} source={require('./logo.png')} />;
    }
    return (
      <View>
        <ToolbarAndroid
          style={s.toolbar}
          logo={require('./ic_launcher.png')}
          title="My Company"
          subtitle="Welcome to our mobile app"
        />
        <View style={s.imageWrap}>
          {img}
          <Switch onValueChange={(value) => this.setState({logoHidden: value})} value={this.state.logoHidden} />
        </View>
        <ScrollView style={s.scrollView}>
          <Home />
          <About />
          <Contact />
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('businessapp', () => businessapp);
