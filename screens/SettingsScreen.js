// import React from 'react';
// import { Text, View, TextInput, StyleSheet, ImageBackground} from 'react-native';
// import { ExpoConfigView } from '@expo/samples';

// export default class SettingsScreen extends React.Component {
//   static navigationOptions = {
//     title: 'New List',
//     header: null,
//   };

//   render() {
//     return (
//       <ImageBackground source={require('../assets/images/blurry3.png')} style={styles.container}>
        
//           <Text>Hello</Text>
//           <View style={styles.inputContainer}>
//             <TextInput style={styles.textInput} placeholder="Input Here"/>
//           </View>
//           <View style={styles.inputContainer}>
//             <TextInput style={styles.textInput} placeholder="Input Here"/>
//           </View>
//           <View style={styles.inputContainer}>
//             <TextInput style={styles.textInput} placeholder="Input Here"/>
//           </View>
//           <View style={styles.inputContainer}>
//             <TextInput style={styles.textInput} placeholder="Input Here"/>
//           </View>
          
        
//       </ImageBackground>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 30,
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   inputContainer: {
//     height: 40,
//     borderRadius: 30,
//     paddingTop: 5,
//     paddingRight: 10,
//     paddingLeft: 10,
//     marginTop: 5,
//     backgroundColor: 'white', 
//   },
//   textInput: {
//     fontSize: 20,
//     textAlign: 'center',
//     paddingBottom: 10,
//   },
// });

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Icon,
} from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      email: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  _handleSignUp() {
    console.log(this.state.username);
    console.log(this.state.password);
    console.log(this.state.passwordConfirm);
    console.log(this.state.email);
  }
  _handleLogin() {
    console.log(this.state.username);
    console.log(this.state.password);
    console.log(this.state.email);
  }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   // alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <ImageBackground source={require('../assets/images/blurry3.png')} style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {/* <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/coupons.jpg')
                  : require('../assets/images/coupons.jpg')
              }
              style={styles.welcomeImage}
            />
          </View> */}

          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>Coupon App Login</Text>
            
{/* ----------------------- Username input ----------------------- */}
            <FormLabel labelStyle={styles.formTitle}>Username</FormLabel>
            <FormInput  
              containerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle} 
              value={this.state.username}  
              onChangeText={(text) => this.setState({ username: text })}
            /> 
            {/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}

{/* ----------------------- Password input ----------------------- */}
            <FormLabel labelStyle={styles.formTitle}>Password</FormLabel>
            <FormInput 
              secureTextEntry={true} 
              containerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle} 
              value={this.state.password} 
              onChangeText={(text) => this.setState({ password: text })} 
            />
            {/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}

{/* ----------------------- Password input ----------------------- */}
            <FormLabel labelStyle={styles.formTitle}>Confirm Password</FormLabel>
            <FormInput 
              secureTextEntry={true} 
              containerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle}
              value={this.state.passwordConfirm} 
              onChangeText={(text) => this.setState({ passwordConfirm: text })} 
            />
            {/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}

{/* ----------------------- Email address input ----------------------- */}
            <FormLabel labelStyle={styles.formTitle}>Email Address</FormLabel>
            <FormInput 
              value={this.state.email} 
              containerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle}
              onChangeText={(text) => this.setState({ email: text })} 
            />
            {/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}
          </View>

{/* ----------------------- Sign up and Login Buttons ----------------------- */}
          <View style={styles.helpContainer}>
            <View>
              <Button
                onPress={() => this._handleSignUp()}
                icon={{name:'person-add', color:'white'}}
                buttonStyle={styles.buttonSignUp}
                //raised
                title='SIGNUP'
              />
            </View>
            <View>
              <Button
                onPress={() => this._handleLogin()}
                icon={{name:'person', color:'white'}}
                buttonStyle={styles.buttonLogin}
                //raised
                title='LOGIN'
              />
            </View>
          </View>
        </ScrollView>

      </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,

  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 25,
    color: 'white',
    // lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    marginRight: 40,
    marginLeft: 40,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonSignUp: {
    borderRadius: 20,
    backgroundColor: 'blue',
    height: 40
  },
  buttonLogin: {
    borderRadius: 20,
    backgroundColor: 'green',
    height: 40
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  signUpButton: {
    backgroundColor: '#7FFF00',
  },
  inputStyle: {
    textAlign: 'center',
  },
  formTitle: {
    fontSize: 20,
    color: 'white',
    marginTop: 5,
    marginBottom: -2,
    // paddingHorizontal: 5, 
    // borderWidth: 1,
    // borderColor: '#43ebf3',
  },
  containerStyle: {
    borderWidth: 1,
    borderColor: '#43ebf3',
    borderRadius: 50,
    padding: 10, 
    marginTop: 0
  }
});