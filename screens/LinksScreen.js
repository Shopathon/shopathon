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
import { Button, Icon, Header, CheckBox } from 'react-native-elements';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import RootNavigation from '../navigation/RootNavigation';
import ShopList from '../components/ShopList';
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
    const { params } = this.props.navigation.state;
    const itemId = params ? params.id : null;
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
              id={itemId}
              style={styles.container}
              addItem={this.state.addItem}
              key={this.state.key}
            />
          </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, 
    width: null,
    height: null,
  },
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
    justifyContent: 'center',
  }
});
