import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button, FormLabel, FormInput } from "react-native-elements";
import axios from 'axios';

class FormView extends Component {
  	constructor(props) {
    	super(props)
    	this.state = {
      		name: '',
      		text: '',
    	};
  	};
 	 addNewItem = () => {
    	let self = this
    	axios.post('https://shielded-mesa-86644.herokuapp.com/new/listItem/' + this.props.id, {
      		name: this.state.name
		})
		.then(function (response) {
        	self.setState({name: ""})    
      	})
      	.catch(function (error) { console.log(error) });
  	};

  	render() {
    	return (
      		<View style={styles.rowForm}>
        		<View style={{ width: "75%" }}>
          			<TextInput
						value={this.state.name}
						onChangeText={(text) => this.setState({ name: text })}
						name="Add Item"
						placeholder="Add Item..." 
						selectionColor="#000000"
						style={{ fontSize: 20, height: 60, paddingRight: 0, marginRight: 0, marginLeft: 35 }}
						underlineColorAndroid={'transparent'}/>
        		</View>
        		<View>
					<Button
						buttonStyle={{ padding: 0, marginLeft: 0, alignContent: 'center' }}
						icon={{ name:'add-circle', color:'#32ec2680', size: 60, padding: 0 }}
						backgroundColor="transparent"
						onPress={this.addNewItem}/>
        		</View>
      		</View>
		);
	};
};

const styles = StyleSheet.create({
  	rowForm: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: "100%",
		marginLeft: 20,
		marginBottom: 0
  	}
});

export default FormView;
