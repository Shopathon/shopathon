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
    Modal,
    AsyncStorage
} from 'react-native';
import SwitchNavigator from "../App";
import { Button, Icon, Header } from 'react-native-elements';
//import { WebBrowser, Font } from 'expo';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Constants, WebBrowser } from 'expo';
import RootNavigation from '../navigation/RootNavigation';
// import { DrawerNavigator } from 'react-navigation';
// import MainTabNavigator from '../navigation/MainTabNavigator';
import axios from 'axios';
import StoreButton from '../components/StoreButton'

// const MyApp = DrawerNavigator({
//   Home: {
//     screen: 'Home',
//   }
// });

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
        drawerLabel: 'Home'
    };
    // componentWillMount() {
    //     StatusBar.setHidden(true);
	// }
	
	async componentWillMount() {
		StatusBar.setHidden(true);
        const bob = await AsyncStorage.getItem('@superkey: id');
        if (bob) {
        //   console.log(bob);
          this.setState({id: bob});
        }
    }

    state = {
		modalVisible: false,
		modalVisibleInfo: false,
        store: "",
		stores: [],
		id: ""
    };

	componentDidMount(){
        // console.log(this.props.navigation.state.params.id);
        if (this.state.id) {
           	axios.get('https://shielded-mesa-86644.herokuapp.com/user/' + this.state.id)
        	// axios.get('http://localhost:9000/user/' + this.state.id)
			.then((response) => {
				this.setState({
					stores: response.data
				})
			}).catch(function (error) {
				console.log(error);
			})
        }
   	};

   componentDidUpdate(){
        if (this.state.id) {
            axios.get('https://shielded-mesa-86644.herokuapp.com/user/' + this.state.id)
        // axios.get('http://localhost:9000/user/' + this.state.id)
        .then((response) => {
            this.setState({
                stores: response.data
            })
        }).catch(function (error) {
            console.log(error);
        })
        }
    };
    
    renderStores () {
        return (this.state.stores?this.state.stores.map((stores, index) =>
        <StoreButton navigate={this.props.navigation.navigate} key={index} id={stores._id} name={stores.store}/>)
    :null)};

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
	};
	setModalVisibleInfo(visible) {
        this.setState({modalVisibleInfo: visible});
    };

    // async _handleLogin() {
	//    await AsyncStorage.removeItem('@superkey: id');
           
	// };

    // newList(visible) {
    //     this.setState({modalVisible: visible});
    //     axios.post("https://shielded-mesa-86644.herokuapp.com/new/list/", {
    //         store: this.state.store
    //     }).then(function(data) {
    //         console.log(data.data);
    //         if (data) {
    //             console.log("it worked");  
    //         }   
    //     })
	// };
	newList(visible) {
        let self = this;
        axios.post("https://shielded-mesa-86644.herokuapp.com/new/list/" + this.state.id, {
            store: this.state.store
        }).then(function(data) {
            console.log(data.data);
            if (data) {
                console.log("it worked");
                self.setState({modalVisible: visible, store: ""});  
           }  
        })
    };

    async _handleLogin() {
		let component = this;
	   	const bob = await AsyncStorage.removeItem('@superkey: id');
	   	console.log(bob);
		component.props.navigation.navigate('Auth');
	}

    render() {
        const { navigate } = this.props.navigation;
        return (
// ------------------------- Background Image -------------------------
            <ImageBackground source={require('../assets/images/gradient2.png')} style={styles.backgroundImage}>

{/* ------------------------- Page Header ------------------------- */}
                <Header
                    leftComponent={{ icon: 'info', color: '#fff', onPress: () => this.setModalVisibleInfo(true) }}
                    centerComponent={{ text: 'Your Lists', style: styles.headerText}}
                    outerContainerStyles={styles.statusBar}
                    rightComponent={{ icon: 'md-log-out', color: '#fff', type: 'ionicon', onPress: () => this._handleLogin()}}
                />

{/* ------------------------- Main Container ------------------------- */}
                <ScrollView style={styles.container}>
                    <View style={{alignItems: 'center', paddingBottom: 10,}}>
                        {this.renderStores()}

{/* ------------------------- Add New Item Box/ Modal ------------------------- */}
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {console.log('closed');}} >

                            <ImageBackground source={require('../assets/images/gradient2.png')} style={styles.backgroundImage}>
                                <View>
                                    <View style={styles.statusBar}>
                                        <Text style={styles.headerText}>Add New List</Text>
                                    </View>
                                </View>
                                <ScrollView style={styles.container}>
                                    <View style={styles.listContainer}>
                                        <View style={styles.itemBox}>
											<TextInput style={styles.textInput}
												placeholder="Add List..." 
												selectionColor="#ffffff"
												value={this.state.store}
												underlineColorAndroid={'transparent'}
                                                onChangeText={(text) => this.setState({ store: text })} />
                                        </View>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <View>
                                            <Button
                                                onPress={() => {this.newList(false)}}
                                                //icon={{name:'add', color:'white'}}
                                                buttonStyle={styles.buttonAddList}
                                                //raised
                                                title={ 
                                                    // <Text style={styles.listBoxAddText}>
                                                    //     Add List
													// </Text>
													<Text style={styles.listBoxAddText}>
														<Ionicons name={'md-add-circle'} size={20} /> Add List
													</Text> } />
                                        </View>
                                        <View>
                                            <Button
                                                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                                                icon={{name:'hot-tub', color:'white'}}
                                                buttonStyle={styles.buttonClose}
                                                //raised
                                                title={ 
                                                    <Text style={styles.listBoxAddText}>
                                                        Close
                                                    </Text> } />
                                        </View>
                                    </View>
                                </ScrollView>
                            </ImageBackground>
                        </Modal>
		{/* Info */}
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
										//raised
										title='Close' />
								</View>
							</ImageBackground>
						</Modal>
                    </View>
                </ScrollView>
				<View style={{ marginBottom: 15 }}>
					<Button
						onPress={() => { this.setModalVisible(true); }}
						buttonStyle={styles.newListButton}
						title={ 
							<Text >
								<Ionicons name={'md-add-circle'} size={20} /> Create A List
							</Text> } />
				</View>
            </ImageBackground>
        );
	}
	_handleGithubJoe = () => {
		WebBrowser.openBrowserAsync('https://github.com/itsajoe');
	};
	_handleLinkedJoe = () => {
		WebBrowser.openBrowserAsync('https://www.linkedin.com/in/joseph-musser-6835ba13a/');
	};
	_handleGithubAusten = () => {
		WebBrowser.openBrowserAsync('https://github.com/pritchettausten');
	};
	_handleLinkedAusten = () => {
		WebBrowser.openBrowserAsync('https://www.linkedin.com/in/austen-pritchett-02695146/');
	};
	_handleGithubJordan = () => {
		WebBrowser.openBrowserAsync('https://github.com/jhiggi44');
	};
	_handleLinkedJordan = () => {
		WebBrowser.openBrowserAsync('https://www.linkedin.com/in/jordan-higgins/');
	};
	_handleGithubZiwei = () => {
		WebBrowser.openBrowserAsync('https://github.com/zz0115');
	};
	_handleLinkedZiwei = () => {
		WebBrowser.openBrowserAsync('https://www.linkedin.com/in/ziwei0115/');
	};
	_handleGithubChase = () => {
		WebBrowser.openBrowserAsync('https://github.com/chasemillet');
	};
	_handleLinkedChase = () => {
		WebBrowser.openBrowserAsync('https://www.linkedin.com/in/chase-millet-2aa095b9/');
	};
};

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
		paddingBottom: 10
    },
    newListButton: {
        width: '100%', 
        height: 40, 
        backgroundColor: '#32ec2680', 
        borderWidth: 1,
        borderColor: '#91ec8b',
        marginTop: 10, 
		borderRadius: 20,
		
		// borderRadius: 20,
        // borderWidth: 1,
        // borderColor: '#f7919f',
        // backgroundColor: '#d4152f',
        // height: 40
    }, 
    listBoxAddText: {
        fontFamily: 'averia-serif',
        fontSize: 18,
        color: 'white', 
		marginTop: 10,
		marginBottom: 15,
        // fontWeight: "bold", 
        textAlign: "center",
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,   
    },
    listContainer: {
        paddingTop: 30,
        alignItems: 'center',
	},
	modalContainer:{
		padding: 10,
	},
    textInput: {
        height: 45,
        fontSize: 30,
        color: 'white',
		textAlign: 'center'
    },
    itemBox: {
        borderColor: 'white',
        borderWidth: 1,
        width: '95%',
        height: 50,
        backgroundColor: '#00000050',
        borderRadius: 50,
        paddingHorizontal: 20,
    },
    buttonAddList: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#91ec8b',
        backgroundColor: '#32ec2680',
        height: 40
    },
    buttonClose: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#f7919f',
        backgroundColor: '#d4152f',
        height: 40
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
	modalHead: {
		textAlign: 'center',
		fontSize: 30,
		borderBottomWidth: 1,
		paddingBottom: 10
	},
	devLinks: {
		//flexWrap: 'wrap', 
		//alignItems: 'flex-start',
		alignItems: 'center',
		flexDirection:'row',
		justifyContent: 'space-between',
		//marginBottom: 5,
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
		//paddingTop: 3,
		color: '#ffffff',
		borderBottomWidth: 1,
		borderColor: '#ffffff'

	}
});