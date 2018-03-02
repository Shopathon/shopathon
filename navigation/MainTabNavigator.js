import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
//import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    // Links: {
    //   screen: LinksScreen,
    // },
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
          // case 'Links':
          //   iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
          //   break;
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-home';
                return (
                  <Ionicons
                    name={iconName}
                    size={28}
                    style={{ marginBottom: -3 }}
                    color={"white"}
                  />
                );
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-add-circle';
              return (
                <Ionicons
                  name={iconName}
                  size={28}
                  style={{ marginBottom: -3 }}
                  color={'white'}
                />
              );
        }
        // return (
        //   <Ionicons
        //     name={iconName}
        //     size={28}
        //     style={{ marginBottom: -3 }}
        //     color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        //   />
        // );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#383f58',
      inactiveTintColor: 'white',
      inactiveBackgroundColor: '#655c61',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        borderTopWidth: 0,
      },
    }
  }
);
