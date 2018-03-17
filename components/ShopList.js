import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import ListCheckBox from './ListCheckBox';
import axios from 'axios';
import FormView from './FormView';

class ShopList extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [] };
    };
    componentWillMount() {
        axios.get('https://shielded-mesa-86644.herokuapp.com/list/' + this.props.id)
        .then(response => this.setState({
            list: response.data.listItems, function() {
                console.log(response.data);
            }
        }));
    };
    componentDidUpdate() {
        axios.get('https://shielded-mesa-86644.herokuapp.com/list/' + this.props.id)
        .then(response => this.setState({
            list: response.data.listItems, function() {
                console.log(list);
            }
        }));
    };
    renderList() {
        return this.state.list.map((list, index) =>
            <ListCheckBox 
                camera={ this.props.camera } 
                key={index} 
                tag={list.name} 
                list={list} 
                id={list.id} 
                checked={list.isBought}/>
        );
    };
    render() {
        return (
            <KeyboardAvoidingView behavior={ 'padding' }>
                <View style={styles.containerStyle}>
                    <ScrollView style={{ marginRight: 15, marginLeft: 15 }}>
                        {this.renderList()}
                    </ScrollView>
                    <FormView id = {this.props.id}/>
                    {this.props.children}
                </View>
            </KeyboardAvoidingView>
        );
    }
};

const styles = {
    containerStyle: {
        height: '98%',
        width: '100%',
        paddingBottom: 20,
    }
};

export default ShopList;