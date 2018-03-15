import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import ListCheckBox from './ListCheckBox';
import axios from 'axios';
import FormView from './FormView';

// https://shielded-mesa-86644.herokuapp.com/list/5a91bbc0246ffb0014ba7807

class ShopList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],

        };
    }
    
    componentWillMount() {
        //console.log(this.props.id)
        axios.get('https://shielded-mesa-86644.herokuapp.com/list/' + this.props.id)
            .then(response => this.setState({
                list: response.data.listItems, function() {
                    console.log(response.data);
                }
            }));
    }

    componentDidUpdate() {
        //console.log(this.props.id)
        axios.get('https://shielded-mesa-86644.herokuapp.com/list/' + this.props.id)
            .then(response => this.setState({
                list: response.data.listItems, function() {
                    console.log(list);
                }
            }));
    }

    renderList() {
        return this.state.list.map((list, index) =>
            <ListCheckBox camera={ this.props.camera } key={index} tag={list.name} list={list} id={list.id} checked={list.isBought}/>);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'}>
                <View style={styles.containerStyle}>
                    <ScrollView style={{ borderBottomWidth: 3, zIndex: 1 }}>
                        {this.renderList()}
                        {this.props.children}
                    </ScrollView>
                    <FormView id = {this.props.id}/>
                </View>
            </KeyboardAvoidingView>
        );
    }
};

const styles = {
    containerStyle: {
        height: '98%',
        width: '100%'
    }
};


export default ShopList;