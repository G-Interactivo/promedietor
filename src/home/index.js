import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Navigator from '../navigator'
import {Card, Button, Subheader, Divider} from 'react-native-material-design'

export default class Home extends Component {
  render() {
    return (
      <Navigator>
        <ScrollView>
          <Subheader text="Corte 3 (30%)" />
          <Card>
            <Card.Body>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold'}}>Asignatura</Text>
                <Text style={{fontWeight: 'bold'}}>Promedio</Text>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold'}}>Matemáticas I</Text>
                <Text>4.2</Text>
              </View>
              <Divider />
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold'}}>Física I</Text>
                <Text>3.8</Text>
              </View>
              <Divider />
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold'}}>Programación General</Text>
                <Text>4.0</Text>
              </View>
              <Divider />
            </Card.Body>
          </Card>
        </ScrollView>
      </Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
