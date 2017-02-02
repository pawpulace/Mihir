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
  TextInput,
  Picker,
  Item,
} from 'react-native';
import Button from 'react-native-button';

class Pawpulace extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Litter Information
        </Text>
        <TextInput
          style={{
            height: 41,
            width:  250 ,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
            marginLeft: 60,
          }}
          placeholder={'Sire'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        />
        <TextInput
          style={{
            marginTop: 15,
            height: 41,
            width:  250 ,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
            margin: 60,
          }}
          placeholder="Dam"
          onChangeText={(text) => this.setState({text})}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style ={{
              fontSize: 15,
              textAlign: "left",
            }}>
          Puppies available:
          </Text>
          <TextInput
          style={{
            height: 31,
            width:  35 ,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
          }}
          placeholder=""
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        <Button
          containerStyle={{padding:10, height:40, width:100, overflow:'hidden', borderRadius:10, backgroundColor: 'dodgerblue', marginTop: 20}}
          style={{fontSize: 15, color: 'white'}}>
          Next
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Pawpulace', () => Pawpulace);
