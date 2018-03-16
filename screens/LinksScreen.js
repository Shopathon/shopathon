import React from 'react';

//------------------------- Built In Components ------------------------- 
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
	KeyboardAvoidingView,
	Modal
} from 'react-native';
import { Button, Icon, Header, CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';

//------------------------- Components ------------------------- 
import { MonoText } from '../components/StyledText';
import RootNavigation from '../navigation/RootNavigation';
import ShopList from '../components/ShopList';
import FormView from '../components/FormView';
import axios from 'axios';

//------------------------- Link Screen ------------------------- 
export default class LinksScreen extends React.Component {
  	constructor(props) {
    	super(props)
    	this.state = {
      		addItem: false,
			  key: '',
			  modalVisible: false,
			  coupons: []
    	}
  	};
  	static navigationOptions = {
    	header: null,
  	};
  	componentWillMount() {
    	StatusBar.setHidden(true);
	  };
	  
	  setModalVisible(visible) {
        this.setState({modalVisible: visible});
    };

	couponCall(id) {
		axios.get('https://shielded-mesa-86644.herokuapp.com/all/coupons/' + id)
        .then((response) => {
			// console.log(response.data);
			this.setState({
				modalVisible: true,
				coupons: response.data
			});
        }).catch(function (error) {
            console.log(error);
        })
	};
	deleteList = (id, navigate) => {
		let self = this
		  console.log(id)
		  axios.delete('https://shielded-mesa-86644.herokuapp.com/delete/list/' + id, {
		  })
			.then(function (response) {    
			  // console.log(self.props);
			  console.log(response);
			  navigate('Home');
			})
			.catch(function (error) {
			  console.log(error);
			});
	  }

	renderCoupons() {
		console.log(this.state.coupons);
			return (this.state.coupons?this.state.coupons.map((coupon, index) =>
			<Image 
			key={index} 
			style={{width: 200, height: 200, marginTop: 20}}
			source={{uri: coupon.image}}/>)
		:null)};
	

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
          			rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigate('Home') }} />

{/* ------------------------- Main Container ------------------------- */}
				<View style={{paddingBottom:0, alignItems: 'center'}}>
					<ShopList
						camera={navigate}
						id={itemId}
						style={styles.container}
						addItem={this.state.addItem}
						key={this.state.key} >
						
						<View style={styles.buttonContainer}>
							<View>
								<Button
									onPress={() => {this.couponCall(itemId)}}
									icon={{name:'shopping-cart', color:'white'}}
									buttonStyle={styles.buttonAddList}
									//raised
									title={ 
										<Text style={styles.listBoxAddText}>
											Checkout
										</Text> } />
							</View>
							<View>
								<Button
									onPress={() => this.deleteList(itemId, navigate)}
									icon={{name:'delete', color:'white'}}
									buttonStyle={styles.buttonClose}
									//raised
									title={ 
										<Text style={styles.listBoxAddText}>
											Delete List
										</Text>} />
							</View>
						</View>
					</ShopList>	
				</View>
				<Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {console.log('closed');}} >

                            <ImageBackground source={require('../assets/images/gradient2.png')} style={styles.backgroundImage}>
                                <View>
                                    <View style={styles.statusBar}>
                                        <Text style={styles.headerText}>Coupons</Text>
                                    </View>
                                </View>
								<ScrollView >
									<View style={styles.listContainer}>
										{this.renderCoupons()}
											<View style={{marginTop: 20, marginBottom: 20}}>
												<Button
													onPress={() => this.setModalVisible(!this.state.modalVisible)}
													icon={{name:'hot-tub', color:'white'}}
													buttonStyle={styles.buttonLogin}
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

        paddingTop: 10,
		paddingBottom: 10,
        backgroundColor: '#18454f',
        height: 60,
	},
	buttonContainer: {
		marginTop: 5,
		marginRight: 45,
		marginLeft: 40,
		marginBottom: 5,
		alignItems: 'center',
		//flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	buttonLogin: {
		borderRadius: 20,
		backgroundColor: '#07f50f50',
		height: 40
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
    headerText: {  
        textAlign: 'center',
        color: '#fff',
		paddingTop: 13,
        fontSize: 20, 
        fontFamily: 'averia-serif',
    },

  	container: {
		flex: 1,
		alignItems: 'center'
	},
	listContainer: {
		paddingTop: 30,
		alignItems: 'center'
	}  
});
