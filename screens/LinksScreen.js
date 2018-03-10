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
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';
import {
  Button,
  Icon,
  Header,
  CheckBox
} from 'react-native-elements';
import { WebBrowser, Font } from 'expo';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import RootNavigation from '../navigation/RootNavigation';

//import Header from '../components/Header';
import ShopList from '../components/ShopList';
// import AddItem from '../components/AddItem';
import FormView from '../components/FormView';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addItem: false,
      key: '',
    }
  };
  static navigationOptions = {
    header: null,
  };
  componentWillMount() {
    StatusBar.setHidden(true);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <ImageBackground source={require('../assets/images/gradient1.png')} style={styles.backgroundImage}>

{/* ------------------------- Status Bar ------------------------- */}
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'New List', style: styles.headerText }}
          outerContainerStyles={styles.statusBar}
          rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigate('Home') }}
        />
{/* ------------------------- Main Container ------------------------- */}
         
          <KeyboardAvoidingView style={{paddingBottom:0}}>
            <ShopList
              style={styles.container}
              addItem={this.state.addItem}
              key={this.state.key}
            />
          </KeyboardAvoidingView>
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
    borderBottomWidth: 0,
    //borderColor: 'white',
    //alignItems: 'center',
    paddingBottom: 10,
    //marginBottom: 20,
    backgroundColor: '#18454f',
    height: 50,
    //height: Constants.statusBarHeight,
  },
  headerText: {  
    //textAlign: 'center',
    color: '#fff',
    //paddingTop: 13,
    //marginBottom: 15,
    fontSize: 20, 
    fontFamily: 'averia-serif',
    //position: 'absolute',
  },
  container: {
    //flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
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
