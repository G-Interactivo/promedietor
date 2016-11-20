import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';
import {Notes} from 'promedietor-react'
import { Toolbar, Card } from 'react-native-material-design';

export default class Promedietor extends Component {
  openDrawer(){
    this.refs.drawer.openDrawer(0)
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref='drawer'
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => (
          <Text>Something</Text>
        )}
      >
        <View style={styles.container}>
          <Toolbar
            title="Promedietor"
            icon="menu"
            onIconPress={() => {
              this.openDrawer()
            }}
            theme='dark'
            primary="paperGreen"
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
