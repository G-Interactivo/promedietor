import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';
import { Toolbar, Card } from 'react-native-material-design';
import DrawerContent from './DrawerContent'

export default class Navigator extends Component {
  openDrawer(){
    this.refs.drawer.openDrawer(0)
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref='drawer'
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <DrawerContent/>}
      >
      <Toolbar
        title="Promedietor"
        icon="menu"
        onIconPress={() => {
          this.openDrawer()
        }}
        theme='dark'
        primary="paperGreen"
      />
      <View style={styles.container}>
        {this.props.children}
      </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 61
  }
});
