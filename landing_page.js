import React from 'react';
import Movies from './moviedb'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';



export default class landing_page extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to the Movie database! Turn around 
            to check out movie selection. Ignore the creepy
            surroundings :^)
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 50,
  },
});

// AppRegistry.registerComponent('landing_page', () => landing_page);
