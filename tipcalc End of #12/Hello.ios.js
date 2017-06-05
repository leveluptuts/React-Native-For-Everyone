import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.hello}>Hello iOS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    backgroundColor: '#00FF00',
    fontSize: 24,
  },
});
