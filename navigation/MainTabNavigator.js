import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CameraScreen from '../screens/CameraScreen';

export default TabNavigator({
	Links: {
      	screen: LinksScreen,
    },
    Home: {
      	screen: HomeScreen,
    },
    Camera: {
     	 screen: CameraScreen
    }},{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused }) => {
				const { routeName } = navigation.state;
				let iconName;
				switch (routeName) {
					case 'Links':
						iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
						return ( <Ionicons name={iconName} size={15} color={'white'} /> );
						break;
					case 'Home':
						iconName = Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-home';
						return ( <Ionicons name={iconName} size={15} color={"white"} /> );
						break;
				}
			},
		}),
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
			style: {
				borderTopWidth: 0,
				height: 0,
			},
		}
  	}
);
