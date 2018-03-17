import React from 'react';
import { View } from 'react-native';
import Swipeout from 'react-native-swipeout';
import axios from 'axios';
import Icon from 'react-native-elements';

deleteItem = (id) => {
    let self = this
    axios.delete('https://shielded-mesa-86644.herokuapp.com/delete/listItem/' + id, { })
        .then(function (response) { })
        .catch(function (error) {
            console.log(error);
        });
};
const Card = (props) => {
    let swipeoutBtns = [{
            text: 'Delete',
            sensitivity: 50,
            autoClose: true,
            backgroundColor: 'transparent',
            color: '#ff0000',
            type: 'delete',
            close: true,
            onPress: () => { this.deleteItem(props.id) },
        },{
            text: 'Image',
            sensitivity: 50,
            autoClose: true,
            backgroundColor: 'transparent',
            color: '#ffffff',
            type: 'image',
            right: 'true',
            onPress: () => { props.camera('Camera', {id: props.id}) },
        }];
    return (
        <Swipeout autoClose={true} right={swipeoutBtns} id={props.id} style={styles.thisStyle}>
            <View>
                {props.children}
            </View>
        </Swipeout>
    );
};

const styles = {
    thisStyle: {
       backgroundColor: null,
    },
    swipeButton: {
        borderRadius: 50,
    },
};

export default Card;