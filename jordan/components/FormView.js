import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
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
      <View>
        <FormInput
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
          name="Add Item"
          placeholder="Add Item..." />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="#03A9F4"
          title="Add Item"
          onPress={this.addNewItem}
        />
      </View>
    );
  }

}

export default FormView;
