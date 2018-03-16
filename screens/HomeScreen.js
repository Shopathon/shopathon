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
import { Constants } from 'expo';
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
    componentWillMount() {
        StatusBar.setHidden(true);
    }

    state = {
        modalVisible: false,
        store: "",
        stores: []
    };

    componentDidMount(){
        axios.get('https://shielded-mesa-86644.herokuapp.com/list/')
        .then((response) => {
            this.setState({
                stores: response.data
            })
        }).catch(function (error) {
            console.log(error);
        })
    };

    componentDidUpdate(){
        axios.get('https://shielded-mesa-86644.herokuapp.com/list/')
        .then((response) => {
            this.setState({
                stores: response.data
            })
        }).catch(function (error) {
            console.log(error);
        })
    };
    
    

    renderStores () {
        return (this.state.stores?this.state.stores.map((stores, index) =>
        <StoreButton navigate={this.props.navigation.navigate} key={index} id={stores._id} name={stores.store}/>)
    :null)};

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    };

    // async _handleLogin() {
	//    await AsyncStorage.removeItem('@superkey: id');
           
	// };

    newList(visible) {
        this.setState({modalVisible: visible});
        axios.post("https://shielded-mesa-86644.herokuapp.com/new/list/", {
            store: this.state.store
        }).then(function(data) {
            console.log(data.data);
            if (data) {
                console.log("it worked");  
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
                    leftComponent={{ icon: 'info', color: '#fff', onPress: () => navigate('DrawerToggle') }}
                    centerComponent={{ text: 'Your Lists', style: styles.headerText }}
                    outerContainerStyles={styles.statusBar}
                    rightComponent={{ icon: 'md-log-out', color: '#fff', type: 'ionicon', onPress: () => this._handleLogin() }}
                />

{/* ------------------------- Main Container ------------------------- */}
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
												value={this.state.store}
												underlineColorAndroid={'white'}
                                                onChangeText={(text) => this.setState({ store: text })} />
                                        </View>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <View>
                                            <Button
                                                onPress={() => {this.newList(false)}}
                                                icon={{name:'person-add', color:'white'}}
                                                buttonStyle={styles.buttonAddList}
                                                //raised
                                                title={ 
                                                    <Text style={styles.listBoxAddText}>
                                                        Add List
                                                    </Text>
                                                } />
                                        </View>
                                        <View>
                                            <Button
                                                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                                                icon={{name:'person', color:'white'}}
                                                buttonStyle={styles.buttonClose}
                                                //raised
                                                title={ 
                                                    <Text style={styles.listBoxAddText}>
                                                        Close
                                                    </Text>
                                                } />
                                        </View>
                                    </View>
                                </ScrollView>
                            </ImageBackground>
                        </Modal>

                        <View>
                            <Button
                                onPress={() => { this.setModalVisible(true); }}
                                buttonStyle={styles.newListButton}
                                title={ 
                                    <Text style={styles.listBoxAddText}>
                                        <Ionicons name={'md-add-circle'} size={20} /> Create A List
                                    </Text>
                                }/>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
};

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
		
		paddingBottom: 10
    },
    newListButton: {
        width: 220, 
        height: 50, 
        backgroundColor: '#32ec2680', 
        borderWidth: 1,
        borderColor: '#91ec8b',
        marginTop: 10, 
        borderRadius: 50,
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
});