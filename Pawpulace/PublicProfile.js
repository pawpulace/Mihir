import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Item,
  TouchableHighlight,
  PickerIOS,
} from 'react-native';
import Button from 'react-native-button';



export default class PublicProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: ''
    };
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }


  _gender(sex) {

    this.setState({
      gender:sex
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginBottom: 30,}}>
        <TouchableHighlight onPress={() => this._back()}>
          <Text>Back                            </Text>
        </TouchableHighlight>
        <Text>
          Public Profile
        </Text>
        </View>
      </View>
    );
  }
  _back(){
   this.props.navigator.push({
     name: 'PuppyProfile', // Matches route.name
   })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,
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
  welcome: {
    fontSize: 15,
    textAlign: 'left',
    margin: 20,
  },
});
