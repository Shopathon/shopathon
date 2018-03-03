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
    StatusBar.setHidden(true);
  }
  render() {
    return (
      
      <ImageBackground source={require('../assets/images/blurry3.png')} style={styles.container}>
{/* ------------------------- Status Bar ------------------------- */}
        <View>
          <View style={styles.statusBar}>
            <Text style={styles.headerText}>View and Edit</Text>
          </View>
        </View>

{/* ------------------------- Main Container ------------------------- */}
        <ScrollView style={styles.container}>
          <View style={styles.listContainer}>
            <TextInput style={styles.textInput}/>
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
  statusBar: {
    //borderBottomWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    padding: 20,
    //marginBottom: 20,
    backgroundColor: '#383f58',
    height: Constants.statusBarHeight,
  },
  headerText: {  
    textAlign: 'center',
    color: 'white',
    paddingTop: 8,
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
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  listBox: {
    borderColor: '#43ebf3',
    borderWidth: 1,
    width: 350, 
    height: 70, 
    backgroundColor: null, 
    marginTop: 10, 
    padding: 15, 
    borderRadius: 50,
  },
  listBoxHead: {
    fontFamily: 'averia-serif',
    fontSize: 30,
    color: 'white', 
    // fontWeight: "bold", 
    textAlign: "center",
  },
  listBoxEdit: {
    fontFamily: 'averia-serif',
    color: "#43ebf3", 
    textAlign: "center", 
  },
  newListButton: {
    borderColor: '#229426',
    borderWidth: 1,
    width: 220, 
    height: 50, 
    backgroundColor: '#27bd2c', 
    // paddingTop: 7, 
    // paddingBottom: 11,
    marginTop: 10, 
    borderRadius: 50,
  }, 
  listBoxAddText: {
    fontFamily: 'averia-serif',
    fontSize: 18,
    color: 'white', 
    marginTop: 10,
    // fontWeight: "bold", 
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,  
  },
});
