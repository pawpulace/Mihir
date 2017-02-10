import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Item,
  Navigator,
} from 'react-native';

import LitterRegistration from './LitterRegistration';
import PuppyProfile from './PuppyProfile';
import PublicProfile from './PublicProfile';
import UploadPicture from './uploadPic';

export default class Pawpulace extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'LitterRegistration'}}
        renderScene={this.renderScene}
      />
    )
  }
  renderScene(route, navigator) {
    if(route.name == 'LitterRegistration') {
        return <LitterRegistration navigator={navigator} />
    }
    else if(route.name == 'PuppyProfile') {
        return <PuppyProfile navigator={navigator} />
    }
    else if(route.name == 'PublicProfile') {
        return <PublicProfile navigator={navigator} />
    }
    else {
        return <UploadPicture navigator={navigator} />
    }
  }
}

AppRegistry.registerComponent('Pawpulace', () => Pawpulace);
