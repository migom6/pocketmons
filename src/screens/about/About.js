import React, {Component} from 'react';
import {Button} from 'react-native'

export default class MainScreen extends Component {
    
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Go to Home Tab"
          onPress={() => navigate('Home')}
        />
      );
    }
  }


