import React from 'react';
import Movies from './moviedb'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class movies_react_360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Title:{Object.values(Movies[1])[0]} {" "}
            Description:{Object.values(Movies[1])[1]}
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
    fontSize: 30,
  },
});

AppRegistry.registerComponent('movies_react_360', () => movies_react_360);