import React from 'react';
import { Text, View, TextInput, StyleSheet, ImageBackground} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'New List',
    header: null,
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/blurry3.png')} style={styles.container}>
        
          <Text>Hello</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Input Here"/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Input Here"/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Input Here"/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Input Here"/>
          </View>
          
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    height: 40,
    borderRadius: 30,
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 5,
    backgroundColor: 'white', 
  },
  textInput: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
});
