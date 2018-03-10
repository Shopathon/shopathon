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
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';
import { MonoText } from '../components/StyledText';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Icon,
  Header
} from 'react-native-elements';
import RootNavigation from '../navigation/RootNavigation';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  componentWillMount() {
    StatusBar.setHidden(true);
  }

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
  };

  _handleSignUp() {
    console.log(this.state.username);
    console.log(this.state.password);
    console.log(this.state.passwordConfirm);
    console.log(this.state.email);
  };
  _handleLogin() {
    console.log(this.state.username);
    console.log(this.state.password);
    console.log(this.state.email);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (

// ------------------------- Background Image -------------------------
      <ImageBackground source={require('../assets/images/gradient1.png')} style={styles.backgroundImage}>
    
{/* ------------------------- Page Header ------------------------- */}
        <Header
          leftComponent={{ icon: 'home', color: '#fff', onPress: () => navigate('Home') }}
          centerComponent={{ text: 'Login', style: styles.headerText }}
          outerContainerStyles={styles.statusBar}
          rightComponent={{ icon: 'info', color: '#fff', onPress: () => console.log('pressed') }}
        />
        <ScrollView style={styles.container}>
          <View style={styles.mainContainer}>
            
{/* ----------------------- Username input ----------------------- */}
            <View style={styles.testContainer}>
              
              <View style={styles.rowForIcon}>
                <Icon name='person' color='white'/>
                <FormLabel labelStyle={styles.formTitle}>Username</FormLabel>
              </View>
              <FormInput  
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle} 
                value={this.state.username}  
                onChangeText={(text) => this.setState({ username: text })}
              /> 
              {/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}
            </View>

{/* ----------------------- Password input ----------------------- */}
            <View style={styles.testContainer}>
              <View style={styles.rowForIcon}>
                <Icon name='lock' color='white'/>
                <FormLabel labelStyle={styles.formTitle}>Password</FormLabel>
              </View>
              <FormInput 
                secureTextEntry={true} 
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle} 
                value={this.state.password} 
                onChangeText={(text) => this.setState({ password: text })} 
              />
              {/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}
            </View>

{/* ----------------------- Password input ----------------------- */}
            <View style={styles.testContainer}>
              <View style={styles.rowForIcon}>
                <Icon name='lock' color='white'/>
                <FormLabel labelStyle={styles.formTitle}>Confirm Password</FormLabel>
              </View>
              <FormInput 
                secureTextEntry={true} 
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                value={this.state.passwordConfirm} 
                onChangeText={(text) => this.setState({ passwordConfirm: text })} 
              />
              {/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}
            </View>

{/* ----------------------- Email address input ----------------------- */}
            <View style={styles.testContainer}>
              <View style={styles.rowForIcon}>
                <Icon name='mail' color='white'/>
                <FormLabel labelStyle={styles.formTitle}>Email Address</FormLabel>
              </View>
              <FormInput 
                value={this.state.email} 
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                onChangeText={(text) => this.setState({ email: text })} 
              />
              {/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}
            </View>
          </View>

{/* ----------------------- Sign up and Login Buttons ----------------------- */}
          <View style={styles.buttonContainer}>
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
  statusBar: {
    borderBottomWidth: 0,
    paddingBottom: 10,
    backgroundColor: '#18454f',
    height: 50,
  },
  headerText: {  
    color: '#fff',
    fontSize: 20, 
    fontFamily: 'averia-serif',
  },
  container: {
    flex: 1,
  },
  mainContainer: {
    alignItems: 'center',
    //marginHorizontal: 50,
  },
  buttonContainer: {
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
    backgroundColor: '#5aecf350',
    height: 40
  },
  buttonLogin: {
    borderRadius: 20,
    backgroundColor: '#07f50f50',
    height: 40
  },
  inputStyle: {
    textAlign: 'center',
    paddingRight: 70,
    paddingBottom: 20,
    margin: 0,
    color: 'white',
  },
  formTitle: {
    fontSize: 20,
    marginTop: 0,
    color: 'white',
  },
  containerStyle: {
    padding: 0, 
    margin: 0,
    width: '80%',
  },
  testContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    width: '96%',
    height: 70,
    backgroundColor: '#18454f50',
  }, 
  rowForIcon: {
    flexDirection: 'row',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  }
});