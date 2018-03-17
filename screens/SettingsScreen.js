import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    StatusBar,
	KeyboardAvoidingView,
	AsyncStorage,
	Modal,
	Alert
} from 'react-native';
import SwitchNavigator from "../App";
import { MonoText } from '../components/StyledText';
import { FormLabel, FormInput, FormValidationMessage, Button, Icon, Header } from 'react-native-elements';
import RootNavigation from '../navigation/RootNavigation';
import axios from 'axios';

export default class SettingsScreen extends React.Component {
  	static navigationOptions = { header: null };

  	componentWillMount() { StatusBar.setHidden(true); };

  	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			passwordConfirm: '',
			email: '',
			modalVisible: false,
			modalVisibleInfo: false,
		};
	};

	setModalVisible(visible) {
        this.setState({modalVisible: visible});
	};
	setModalVisibleInfo(visible) {
        this.setState({modalVisibleInfo: visible});
    };
	  
  	async _handleSignUp() {
		let component = this;
		if (this.state.password == this.state.passwordConfirm) {
		const bob = await axios.post("https://shielded-mesa-86644.herokuapp.com/user/new/", {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		})
		if (bob) {
			const res = bob.data._id;
			AsyncStorage.setItem('@superkey: id', res, function(err) {
				if(err) { console.log(err)} 
				else { console.log("Yes"); component.props.navigation.navigate('AuthLoading'); }
			});
				
			
		}
		} else { Alert.alert("Your password doesn't match"); }
	}	
	async _handleLogin() {
		let component = this;
		const bob = await axios.post("https://shielded-mesa-86644.herokuapp.com/login/", {
			username: this.state.username, password: this.state.password
		})
		if (bob) {
			const res = bob.data._id;
			AsyncStorage.setItem('@superkey: id', res, function(err) {
				if(err) { console.log(err) } 
				else { console.log("Yes"); component.props.navigation.navigate('AuthLoading'); }
			});

			

		}
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
// ------------------------- Background Image -------------------------
			<ImageBackground source={require('../assets/images/gradient1.png')} style={styles.backgroundImage}>
{/* ------------------------- Page Header ------------------------- */}
				<Header
					//leftComponent={{ icon: 'home', color: '#fff', onPress: () => navigate('Home') }}
					centerComponent={{ text: 'Login', style: styles.headerText }}
					outerContainerStyles={styles.statusBar}
					rightComponent={{ icon: 'info', color: '#fff', onPress: () => this.setModalVisibleInfo(true) }} />
					
				<ScrollView style={styles.container}>
					<View style={styles.mainContainer}>
{/* ----------------------- Username input ----------------------- */}
						<View style={styles.testContainer}>
							<View style={styles.rowForIcon}>
								<Icon name='person' color='white'/>
								<FormLabel labelStyle={styles.formTitle}>Username</FormLabel>
							</View>
							<FormInput  
								containerStyle={styles.containerStyle}
								selectionColor="#ffffff"
								underlineColorAndroid="transparent"
								inputStyle={styles.inputStyle} 
								value={this.state.username}  
								onChangeText={(text) => this.setState({ username: text })} /> 
						</View>
{/* ----------------------- Password input ----------------------- */}
						<View style={styles.testContainer}>
							<View style={styles.rowForIcon}>
								<Icon name='lock' color='white'/>
								<FormLabel labelStyle={styles.formTitle}>Password</FormLabel>
							</View>
							<FormInput 
								secureTextEntry={true} 
								containerStyle={styles.containerStyle}
								selectionColor="#ffffff"
								underlineColorAndroid="transparent"
								inputStyle={styles.inputStyle} 
								value={this.state.password} 
								onChangeText={(text) => this.setState({ password: text })} />
						</View>
{/* ----------------------- Password input ----------------------- */}
						<View style={styles.testContainer}>
							<View style={styles.rowForIcon}>
								<Icon name='lock' color='white'/>
								<FormLabel labelStyle={styles.formTitle}>Confirm Password</FormLabel>
							</View>
							<FormInput 
								secureTextEntry={true} 
								containerStyle={styles.containerStyle}
								selectionColor="#ffffff"
								underlineColorAndroid="transparent"
								inputStyle={styles.inputStyle}
								value={this.state.passwordConfirm} 
								onChangeText={(text) => this.setState({ passwordConfirm: text })} />
						</View>
{/* ----------------------- Email address input ----------------------- */}
						<View style={styles.testContainer}>
							<View style={styles.rowForIcon}>
								<Icon name='mail' color='white'/>
								<FormLabel labelStyle={styles.formTitle}>Email Address</FormLabel>
							</View>
							<FormInput 
								value={this.state.email} 
								containerStyle={styles.containerStyle}
								selectionColor="#ffffff"
								underlineColorAndroid="transparent"
								inputStyle={styles.inputStyle}
								onChangeText={(text) => this.setState({ email: text })} />
						</View>
					</View>
{/* ----------------------- Sign up and Login Buttons ----------------------- */}
					<View style={styles.buttonContainer}>
						<View>
							<Button
								onPress={() => this._handleSignUp()}
								icon={{name:'person-add', color:'white'}}
								buttonStyle={styles.buttonSignUp}
								title='Sign Up' />
						</View>
						<View>
							<Button
								onPress={() => this.setModalVisible(true)}
								icon={{name:'person', color:'white'}}
								buttonStyle={styles.buttonLogin}
								title='Login' />
						</View>
					</View>
{/* ----------------------- Modal ----------------------- */}
					<Modal
						animationType="slide"
						transparent={false}
						visible={this.state.modalVisible}
						onRequestClose={() => {console.log('closed');}} >
						<ImageBackground source={require('../assets/images/gradient2.png')} style={styles.backgroundImage}>
							<View>
								<View style={styles.statusBar}>
									<Text style={styles.headerText}>Login</Text>
								</View>
							</View>
							<ScrollView style={styles.container}>
								<View style={styles.listContainer}>
									<View style={styles.testContainer}>
										<View style={styles.rowForIcon}>
											<Icon name='person' color='white'/>
											<FormLabel labelStyle={styles.formTitle}>Username</FormLabel>
										</View>
										<FormInput  
											containerStyle={styles.containerStyle}
											selectionColor="#ffffff"
											underlineColorAndroid="transparent"
											inputStyle={styles.inputStyle} 
											value={this.state.username}  
											onChangeText={(text) => this.setState({ username: text })} /> 
									</View>
						{/* ----------------------- Password input ----------------------- */}
									<View style={styles.testContainer}>
										<View style={styles.rowForIcon}>
											<Icon name='lock' color='white'/>
											<FormLabel labelStyle={styles.formTitle}>Password</FormLabel>
										</View>
										<FormInput 
											secureTextEntry={true} 
											containerStyle={styles.containerStyle}
											selectionColor="#ffffff"
											underlineColorAndroid="transparent"
											inputStyle={styles.inputStyle} 
											value={this.state.password} 
											onChangeText={(text) => this.setState({ password: text })} />
									</View>
								</View>
								<View style={styles.buttonContainer}>
									<View>
										<Button
											onPress={() => {this._handleLogin()}}
											icon={{name:'person-add', color:'white'}}
											buttonStyle={styles.buttonLogin}
											title={ <Text style={styles.listBoxAddText}> Login </Text> } />
									</View>
									<View>
										<Button
											onPress={() => this.setModalVisible(!this.state.modalVisible)}
											icon={{name:'person', color:'white'}}
											buttonStyle={styles.buttonSignUp}
											title={ <Text style={styles.listBoxAddText}> Sign Up </Text> } />
									</View>
								</View>
							</ScrollView>
						</ImageBackground>
					</Modal>
					<Modal
						animationType="fade"
						transparent={true}
						visible={this.state.modalVisibleInfo}
						onRequestClose={() => {console.log('closed');}}>
						<ImageBackground source={require('../assets/images/gradient2.png')} style={styles.backgroundImage}>
							<View>
								<View style={styles.statusBar}>
									<Text style={styles.headerText}>Information</Text>
								</View>
							</View>
							<ScrollView style={styles.container}>
								<View style={styles.modalContainer}>
									<Text style={styles.modalHead}>Developers</Text>
									<View style={styles.devLinks}>
										<Text onPress={this._handleGithubJoe} style={styles.linkText}>
											Github
										</Text>
										<Text style={styles.devName}>Joseph Musser</Text>
										<Text onPress={this._handleLinkedJoe} style={styles.linkText}>
											Linked-In
										</Text>
									</View>
									<View style={styles.devLinks}>
										<Text onPress={this._handleGithubAusten} style={styles.linkText}>
											Github
										</Text>
										<Text style={styles.devName}>Austen Pritchett</Text>
										<Text onPress={this._handleLinkedAusten} style={styles.linkText}>
											Linked-In
										</Text>
									</View>
									<View style={styles.devLinks}>
										<Text onPress={this._handleGithubJordan} style={styles.linkText}>
											Github
										</Text>
										<Text style={styles.devName}>Jordan Higgins</Text>
										<Text onPress={this._handleLinkedJordan} style={styles.linkText}>
											Linked-In
										</Text>
									</View>
									<View style={styles.devLinks}>
										<Text onPress={this._handleGithubZiwei} style={styles.linkText}>
											Github
										</Text>
										<Text style={styles.devName}>Ziwei Zhang</Text>
										<Text onPress={this._handleLinkedZiwei} style={styles.linkText}>
											Linked-In
										</Text>
									</View>
									<View style={styles.devLinks}>
										<Text onPress={this._handleGithubChase} style={styles.linkText}>
											Github
										</Text>
										<Text style={styles.devName}>Chase Millet</Text>
										<Text onPress={this._handleLinkedChase} style={styles.linkText}>
											Linked-In
										</Text>
									</View>
								</View>
							</ScrollView>
							<View style={{ marginBottom: 15 }}> 
								<Button
									onPress={() => this.setModalVisibleInfo(!this.state.modalVisibleInfo)}
									icon={{name:'hot-tub', color:'white'}}
									buttonStyle={styles.buttonClose}
									title='Close' />
							</View>
						</ImageBackground>
					</Modal>
				</ScrollView>
			</ImageBackground>
		);
	}
	_handleGithubJoe = 		() => { WebBrowser.openBrowserAsync ( 'https://github.com/itsajoe' ); };
	_handleLinkedJoe = 		() => { WebBrowser.openBrowserAsync ( 'https://www.linkedin.com/in/joseph-musser-6835ba13a/' ); };
	_handleGithubAusten = 	() => { WebBrowser.openBrowserAsync ( 'https://github.com/pritchettausten' ); };
	_handleLinkedAusten = 	() => { WebBrowser.openBrowserAsync ( 'https://www.linkedin.com/in/austen-pritchett-02695146/' ); };
	_handleGithubJordan = 	() => { WebBrowser.openBrowserAsync ( 'https://github.com/jhiggi44' ); };
	_handleLinkedJordan = 	() => { WebBrowser.openBrowserAsync ( 'https://www.linkedin.com/in/jordan-higgins/' ); };
	_handleGithubZiwei = 	() => { WebBrowser.openBrowserAsync ( 'https://github.com/zz0115' ); };
	_handleLinkedZiwei = 	() => { WebBrowser.openBrowserAsync ( 'https://www.linkedin.com/in/ziwei0115/' ); };
	_handleGithubChase = 	() => { WebBrowser.openBrowserAsync ( 'https://github.com/chasemillet' ); };
	_handleLinkedChase = 	() => { WebBrowser.openBrowserAsync ( 'https://www.linkedin.com/in/chase-millet-2aa095b9/' ); }; 
}
const styles = StyleSheet.create({
	statusBar: {
        borderBottomWidth: 0,
        paddingTop: 10,
		paddingBottom: 10,
        backgroundColor: '#18454f',
        height: 60,
    },
    headerText: {  
        textAlign: 'center',
        color: '#fff',
		paddingTop: 13,
        fontSize: 20, 
        fontFamily: 'averia-serif',
    },
	container: {
		flex: 1,
	},
	listContainer:{
		alignItems: 'center'
	},
	mainContainer: {
		alignItems: 'center',
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
		backgroundColor: '#447d9280',
		height: 40
	},
	buttonLogin: {
		borderRadius: 20,
		backgroundColor: '#32ec2680',
		height: 40
	},
	inputStyle: {
		textAlign: 'center',
		paddingRight: 70,
		paddingBottom: 20,
		margin: 0,
		color: 'white',
	},
	formTitle: {
		fontSize: 20,
		marginTop: 0,
		color: 'white',
	},
	containerStyle: {
		padding: 0, 
		margin: 0,
		width: '80%',
	},
	testContainer: {
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 50,
		borderColor: 'white',
		paddingTop: 5,
		paddingBottom: 5,
		marginTop: 10,
		width: '96%',
		height: 70,
		backgroundColor: '#18454f50',
	}, 
	rowForIcon: {
		flexDirection: 'row',
	},
	backgroundImage: {
		flex: 1,
		width: null,
		height: null,
	},
	modalHead: {
		textAlign: 'center',
		fontSize: 30,
		//borderBottomWidth: 1,
		paddingBottom: 10
	},
	devLinks: {
		alignItems: 'center',
		flexDirection:'row',
		justifyContent: 'space-between',
		marginLeft: 10,
		marginRight:10,
	},
	devName: {
		fontSize: 20,
		margin: 5,
		marginLeft: 18,
	},
	linkText:{
		fontSize: 16,
		textAlign: 'right',
		margin: 5,
		color: '#ffffff',
		borderBottomWidth: 1,
		borderColor: '#ffffff'
	},
	buttonClose: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#f7919f',
        backgroundColor: '#d4152f',
        height: 40
	}
});