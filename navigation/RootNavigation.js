import { Notifications } from 'expo';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabBarBottom } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const RootStackNavigator = StackNavigator({
	Main: {
		screen: MainTabNavigator,
	}},{
		navigationOptions: () => ({
			headerTitleStyle: {
				fontWeight: 'normal'
			},
		}),
	}
);

export default class RootNavigator extends React.Component {
	componentDidMount() {
		this._notificationSubscription = this._registerForPushNotifications();
	};
	componentWillUnmount() {
		this._notificationSubscription && this._notificationSubscription.remove();
	}
	render() {
		return <RootStackNavigator />;
	}
  	_registerForPushNotifications() {
    	registerForPushNotificationsAsync();

    	this._notificationSubscription = Notifications.addListener(this._handleNotification);
  	}
	_handleNotification = ({ origin, data }) => {
		console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
	};
}
