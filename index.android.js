import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {Router} from 'react-native-router-flux';
import {
  Scenes
} from './src/app'

export default class Promedietor extends Component {
  render() {
    return (
      <Router scenes={Scenes}/>
    );
  }
}

AppRegistry.registerComponent('Promedietor', () => Promedietor);
