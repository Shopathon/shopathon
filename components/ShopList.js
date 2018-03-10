import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
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
        axios.get('https://shielded-mesa-86644.herokuapp.com/list/5a91bbc0246ffb0014ba7807')
            .then(response => this.setState({
                list: response.data.listItems, function() {
                    console.log(response.data);
                }
            }));
           
    }

    componentDidUpdate() {
        axios.get('https://shielded-mesa-86644.herokuapp.com/list/5a91bbc0246ffb0014ba7807')
            .then(response => this.setState({
                list: response.data.listItems, function() {
                    console.log(list);
                }
            }));
    }


    renderList() {
        return this.state.list.map((list, index) =>
            <ListCheckBox key={list.id} tag={list.name} list={list} id={list.id} checked={list.isBought}/>);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <ScrollView >
                    {this.renderList()}
                </ScrollView>
                <FormView />
            </View>
        );
    }

};

const styles = {
    containerStyle: {
        height: '96%',
        width: '100%'
    }
};


export default ShopList;