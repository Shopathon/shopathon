import React, { Component } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';

import axios from 'axios';
import Card from './Card';

class ListCheckBox extends Component {
    constructor() {
        super();
        this.state = {
            checked: true,
        };
    }

    isInCart = (id, name, checked) => {
        // console.log(id);
        let self = this
        axios.put('https://shielded-mesa-86644.herokuapp.com/updateItem/' + id, {
            name: name,
            isBought: this.state.checked
        })
            .then(function (response) {
                console.log('updated...')
            })
            .catch(function (error) {
                // console.log(error);
            });
    }

    isChecked = (id, name, checked) => {
        let self = this
        this.setState({ checked: !checked })
    }

    isBought = (id, name, checked) => {
        let self = this
        this.isChecked(id, name, checked);
        this.isInCart(id, name, checked);
    }


    render() {
        const { list } = this.props;
        const { checked } = this.state;

        return (
            <Card
                id={list._id}
                camera={this.props.camera}
            >
                <CheckBox
                    containerStyle={styles.checkBox}
                    textStyle={styles.checkText}
                    key={list.id}
                    list={list}
                    title={list.name}
                    id={list._id}
                    checked={list.isBought}
                    uncheckedColor='white'
                    onPress={() => this.isBought(list._id, list.name, checked)}
                />
            </Card>
        );
    }
}

const styles = {
    checkBox: {
        borderRadius: 30,
        backgroundColor: '#18454f50',
    },
    checkText: {
        color: 'white',
        fontSize: 18
    }
};

export default ListCheckBox;