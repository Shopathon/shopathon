import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    Links: {
      screen: LinksScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Links':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
            return (
              <Ionicons
              name={iconName}
              size={15}
              //style={{ marginBottom:  }}
              color={'white'}
              />
            );
            break;

//-----------------------------Home tab in tab bar-----------------------------
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-home';
                return (
                  <Ionicons
                    name={iconName}
                    size={15}
                    //style={{ marginBottom: 2 }}
                    color={"white"}
                  />
                );
            break;
            
//-----------------------------Settings tab in tab bar-----------------------------
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-add-circle';
              return (
                <Ionicons
                  name={iconName}
                  size={15}
                  //style={{ marginBottom: 2 }}
                  color={'white'}
                />
              );
        }
        // return (
        //   <Ionicons
        //     name={iconName}
        //     size={28}
        //     style={{ marginBottom: 2 }}
        //     color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        //   />
        // );
      },
    }),
  
//-----------------------------Tab bar styling-----------------------------
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#18454f',
      inactiveTintColor: 'white',
      inactiveBackgroundColor: '#25626e',
      showLabel: false,
      // labelStyle: {
      //   fontSize: 12,
      //   marginTop: 5,
      // },
      style: {
        borderTopWidth: 0,
        height: 0,
      },
    }
  }
);
