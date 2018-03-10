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
  }

  addNewItem = () => {
      let self = this
      axios.post('https://shielded-mesa-86644.herokuapp.com/new/listItem/5a91bbc0246ffb0014ba7807/', {
        name: this.state.name
      })
        .then(function (response) {     
          // console.log(self.props);
          // console.log(response);
        })
        .catch(function (error) {
          // console.log(error);
        });
  }

  render() {
    return (
      <View style={styles.rowForm}>
        <View>
          <FormInput
            value={this.state.name}
            onChangeText={(text) => this.setState({ name: text })}
            name="Add Item"
            placeholder="Add Item..." 
            containerStyle={{marginRight: 0}}
            inputStyle={{width: 250}}
          />
        </View>
        <View>
          <Button
            buttonStyle={{ borderRadius: 50, height: 50, width: 50, padding: 0, marginLeft: 0, alignContent: 'center' }}
            icon={{name:'add-circle', color:'blue', size: 40}}
            backgroundColor="transparent"
            //title="Add"
            onPress={this.addNewItem}
          />
          {/* <Button
            buttonStyle={{ borderRadius: 50, height: 50, width: 50, padding: 0, marginLeft: 0, alignContent: 'center' }}
            icon={{name:'check', color:'green', size: 40}}
            backgroundColor="transparent"
            //title="Add"
            onPress={this.addNewItem}
          /> */}
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  rowForm:{
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
export default FormView;
