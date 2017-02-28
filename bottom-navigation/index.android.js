/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import BottomNavigation, { Tab } from './react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import { TabNavigator, TabView } from 'react-navigation'


export default class Playground extends Component {


  render() {
    return (
      <View style={{ flex: 1 }}>
        <BottomNavigation
          labelColor="white"
          rippleColor="white"
          style={{ height: 56, elevation: 8, position: 'absolute', left: 0, top: 0, right: 0 }}
          onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
        >
          <Tab
            barBackgroundColor="#37474F"
            label="Movies & TV"
            icon={<MIcon size={24} color="white" name="ondemand-video" />}
          />
          <Tab
            barBackgroundColor="#00796B"
            label="Music"
            icon={<Icon size={24} color="white" name="music-note" />}
          />
          <Tab
            barBackgroundColor="#5D4037"
            label="Books"
            icon={<Icon size={24} color="white" name="book" />}
          />
          <Tab
            barBackgroundColor="#3E2723"
            label="Newsstand"
            icon={<Icon size={24} color="white" name="newspaper" />}
          />
        </BottomNavigation>
      </View>
    )
  }
}

AppRegistry.registerComponent('Playground', () => Playground);
