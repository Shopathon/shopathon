import React from 'react';
import { Text, View, TextInput, StyleSheet, } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'New List',
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <TextInput style={styles.textInput} placeholder="Type here to translate!"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  textInput: {
    fontSize: 14,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
  },
});
