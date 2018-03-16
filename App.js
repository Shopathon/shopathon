import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isAuthed: false,
    isAuthedChecked: false
  };
  
  async componentDidUpdate() {
    if (!this.state.isAuthedChecked) {
      const bob = await AsyncStorage.getItem('@superkey: id');
        if (bob) {
          this.setState({isAuthed: true, isAuthedChecked: true});
        }
      return this.state.isAuthed? this.props.navigation.navigate('App'): this.props.navigation.navigate('Auth');
    } else {
      return this.state.isAuthed? this.props.navigation.navigate('App'): this.props.navigation.navigate('Auth');
    }
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          {/* <RootNavigation /> */}
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        // 'aldrich-regular': require('./assets/fonts/Aldrich-Regular.ttf'),
        'averia-serif': require('./assets/fonts/Averia_Serif_Libre/AveriaSerifLibre-Bold.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const AuthStack = StackNavigator({ SignIn: SettingsScreen });
export default SwitchNavigator(
    {
      AuthLoading: App,
      App: RootNavigation,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
