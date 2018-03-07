import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageBackground,
  StatusBar
} from 'react-native';
import {
  Button,
  Icon,
} from 'react-native-elements';
import { WebBrowser, Font } from 'expo';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  componentWillMount() {
    StatusBar.setHidden(false);
  }

  render() {
    return (
      
      <ImageBackground source={require('../assets/images/blurry4.png')} style={styles.backgroundImage}>

{/* ------------------------- Status Bar ------------------------- */}
        <View>
          <View style={styles.statusBar}>
            <Text style={styles.headerText}>View and Edit</Text>
          </View>
        </View>
        
{/* ------------------------- Main Container ------------------------- */}
        <ScrollView style={styles.container}>
          <View style={styles.listContainer}>
            <View style={styles.itemBox}>
              <TextInput style={styles.textInput}/>
            </View>
          </View>
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

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  statusBar: {
    //borderBottomWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 20,
    backgroundColor: '#18454f',
    height: 60,
    //height: Constants.statusBarHeight,
  },
  headerText: {  
    textAlign: 'center',
    color: 'white',
    paddingTop: 30,
    fontSize: 20, 
    fontFamily: 'averia-serif',
    position: 'absolute',
  },
  container: {
    flex: 1,
  },
  listContainer: {
    paddingTop: 30,
    alignItems: 'center',
  },
  textInput: {
    height: 45,
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  itemBox: {
    borderColor: 'white',
    borderWidth: 1,
    width: '95%',
    height: 50,
    backgroundColor: '#ffffff50',
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1, 
    width: null,
    height: null,
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
    backgroundColor: '#ab040490',
    height: 40
  },
});
