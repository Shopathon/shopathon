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
	Modal
} from 'react-native';
import SwitchNavigator from "../App";
import { MonoText } from '../components/StyledText';
import {
    FormLabel,
    FormInput,
    FormValidationMessage,
    Button,
    Icon,
    Header
} from 'react-native-elements';
import RootNavigation from '../navigation/RootNavigation';
import axios from 'axios';

export default class SettingsScreen extends React.Component {
  	static navigationOptions = {
    	header: null,
	};
	  
  	componentWillMount() {
    	StatusBar.setHidden(true);
  	}

  	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			passwordConfirm: '',
			email: '',
			modalVisible: false
		};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
	};

	setModalVisible(visible) {
        this.setState({modalVisible: visible});
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
				console.log(bob.data._id);
				const res = bob.data._id;
				console.log(res);
				AsyncStorage.setItem('@superkey: id', res, function(err) {
				if(err) {
					console.log(err)
				} else {
				console.log("Yes")
				component.props.navigation.navigate('AuthLoading');
				}});
			}
		} else {
			Alert.alert("Your password doesn't match");
		}
	}	
	async _handleLogin() {
		let component = this;
		const bob = await axios.post("https://shielded-mesa-86644.herokuapp.com/login/", {
			username: this.state.username,
			password: this.state.password
		})
		if (bob) {
			console.log(bob.data._id);
			const res = bob.data._id;
			console.log(res);
			AsyncStorage.setItem('@superkey: id', res, function(err) {
			if(err) {
				console.log(err)
			} else {
			console.log("Yes")
			component.props.navigation.navigate('AuthLoading');
			}});
		}
	}

	render() {
		const { navigate } = this.props.navigation;
		return (

// ------------------------- Background Image -------------------------
			<ImageBackground source={require('../assets/images/gradient1.png')} style={styles.backgroundImage}>
		
{/* ------------------------- Page Header ------------------------- */}
				<Header
					leftComponent={{ icon: 'home', color: '#fff', onPress: () => navigate('Home') }}
					centerComponent={{ text: 'Login', style: styles.headerText }}
					outerContainerStyles={styles.statusBar}
					rightComponent={{ icon: 'info', color: '#fff', onPress: () => this._handleLogin() }} />
					
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
								inputStyle={styles.inputStyle} 
								value={this.state.username}  
								onChangeText={(text) => this.setState({ username: text })} /> 
							{/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}
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
								inputStyle={styles.inputStyle} 
								value={this.state.password} 
								onChangeText={(text) => this.setState({ password: text })} />
							{/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}
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
								inputStyle={styles.inputStyle}
								value={this.state.passwordConfirm} 
								onChangeText={(text) => this.setState({ passwordConfirm: text })} />
							{/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}
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
								inputStyle={styles.inputStyle}
								onChangeText={(text) => this.setState({ email: text })} />
							{/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}
						</View>
					</View>
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
											inputStyle={styles.inputStyle} 
											value={this.state.username}  
											onChangeText={(text) => this.setState({ username: text })} /> 
										{/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}
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
											inputStyle={styles.inputStyle} 
											value={this.state.password} 
											onChangeText={(text) => this.setState({ password: text })} />
										{/* <FormValidationMessage> {'This field is required'} </FormValidationMessage> */}
									</View>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <View>
                                            <Button
                                                onPress={() => {this._handleLogin()}}
                                                icon={{name:'person-add', color:'white'}}
                                                buttonStyle={styles.buttonLogin}
                                                //raised
                                                title={ 
                                                    <Text style={styles.listBoxAddText}>
                                                        LOGIN
                                                    </Text>
                                                } />
                                        </View>
                                        <View>
                                            <Button
                                                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                                                icon={{name:'person', color:'white'}}
                                                buttonStyle={styles.buttonLogin}
                                                //raised
                                                title={ 
                                                    <Text style={styles.listBoxAddText}>
                                                        SIGNUP
                                                    </Text>
                                                } />
                                        </View>
                                    </View>
                                </ScrollView>
                            </ImageBackground>
                        </Modal>
{/* ----------------------- Sign up and Login Buttons ----------------------- */}
					<View style={styles.buttonContainer}>
						<View>
							<Button
								onPress={() => this._handleSignUp()}
								icon={{name:'person-add', color:'white'}}
								buttonStyle={styles.buttonSignUp}
								//raised
								title='SIGNUP' />
						</View>
						<View>
							<Button
								onPress={() => this.setModalVisible(true)}
								icon={{name:'person', color:'white'}}
								buttonStyle={styles.buttonLogin}
								//raised
								title='LOGIN' />
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	statusBar: {
        borderBottomWidth: 0,
        paddingTop: 5,
        paddingBottom: 10,
        backgroundColor: '#18454f',
        height: 55,
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
	mainContainer: {
		alignItems: 'center',
		//marginHorizontal: 50,
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
		backgroundColor: '#07f50f50',
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
	}
});