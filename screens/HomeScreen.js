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
} from 'react-native';
import { WebBrowser, Font } from 'expo';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/congruent_pentagon.png')} style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.headerText}>Your Shopping Lists</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            {/* <View style={{backgroundColor: 'grey', height: 1, width: 325, marginBottom: 20}} /> */}
            <View style={styles.listBox}>
              <Text style={styles.listBoxHead}>Walmart Shopping List</Text>
              <Text style={styles.listBoxEdit}>View/ Edit This List</Text>
            </View>
            <View style={styles.listBox}>
              <Text style={styles.listBoxHead}>Walmart Shopping List</Text>
              <Text style={styles.listBoxEdit}>View/ Edit This List</Text>
            </View>
            <View style={styles.listBox}>
              <Text style={styles.listBoxHead}>Walmart Shopping List</Text>
              <Text style={styles.listBoxEdit}>View/ Edit This List</Text>
            </View>
            <View style={styles.listBoxAdd}>
              <Text style={styles.listBoxHead}>
                Add A New List <Ionicons name={'md-add-circle'} size={20} />
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    // </ImageBackground>
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
  container: {
    flex: 1,
  },
  listBox: {
    width: 350, 
    height: 85, 
    backgroundColor: '#7374a0', 
    marginBottom: 10, 
    padding: 15, 
    borderRadius: 50,
  },
  listBoxAdd: {
    width: 205, 
    height: 50, 
    backgroundColor: '#97ea9d', 
    marginBottom: 10, 
    paddingBottom: 10,
    paddingTop: 10, 
    borderRadius: 50,
  },
  listBoxHead: {
    fontFamily: 'aldrich-regular',
    fontSize: 20, 
    fontWeight: "bold", 
    textAlign: "center",
  },
  listBoxEdit: {
    fontFamily: 'aldrich-regular',
    color: "white", 
    textAlign: "center", 
    marginTop: 10
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
    padding: 20,
    marginBottom: 20,
  },
  headerText: {
    width: 375,
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 20, 
    fontFamily: 'aldrich-regular',
    height: 40,
    backgroundColor: '#afafb1',
    position: 'absolute',
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
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
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
    backgroundColor: 'blue',
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
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  textInput: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    
}
});
