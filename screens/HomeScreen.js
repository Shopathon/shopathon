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
import { WebBrowser, Font } from 'expo';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  componentWillMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      
      <ImageBackground source={require('../assets/images/blurry2.png')} style={styles.container}>
  {/* Status Bar */}
        <View>
          <View style={styles.statusBar}>
            <Text style={styles.headerText}>Shopping Lists</Text>
          </View>
        </View>
  {/* Main Container */}
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={{alignItems: 'center'}}>
  {/* Display Boxes */}
            <View style={styles.listBox}>
              <Text style={styles.listBoxHead}>Walmart</Text>
              <Text style={styles.listBoxEdit}>View/ Edit This List</Text>
            </View>
            <View style={styles.listBox}>
              <Text style={styles.listBoxHead}>Target</Text>
              <Text style={styles.listBoxEdit}>View/ Edit This List</Text>
            </View>
            <View style={styles.listBox}>
              <Text style={styles.listBoxHead}>Costco</Text>
              <Text style={styles.listBoxEdit}>View/ Edit This List</Text>
            </View>
  {/* Add New Item Box */}
            <View style={styles.listBoxAdd}>
              <Text style={styles.listBoxAddText}>
                <Ionicons name={'md-add-circle'} size={20} /> Add A New List
              </Text>
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
    paddingTop: 5,
    fontSize: 20, 
    fontFamily: 'averia-serif',
    position: 'absolute',
  },
  container: {
    flex: 1,
  },
  listBox: {
    borderColor: '#43ebf3',
    borderWidth: 1,
    width: 350, 
    height: 85, 
    //backgroundColor: '#a3aab3', 
    marginTop: 10, 
    padding: 15, 
    borderRadius: 50,
  },
  listBoxAdd: {
    borderColor: 'black',
    borderWidth: 1,
    width: 220, 
    height: 50, 
    backgroundColor: '#b3efaf', 
    // paddingTop: 7, 
    // paddingBottom: 11,
    marginTop: 10, 
    borderRadius: 50,
  },
  listBoxAddText: {
    fontFamily: 'averia-serif',
    fontSize: 23,
    color: 'black', 
    marginTop: 10,
    // fontWeight: "bold", 
    textAlign: "center",
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
    color: "white", 
    textAlign: "center", 
    marginTop: 0,
  },
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: 'blue',
  //   paddingVertical: 20,
  // },
  // tabBarInfoText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center',
  // }, 
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    
}
});
