import React from 'react';
import { View } from 'react-native';
import Swipeout from 'react-native-swipeout';
import axios from 'axios';
import Icon from 'react-native-elements';

deleteItem = (id) => {
    let self = this
    axios.delete('https://shielded-mesa-86644.herokuapp.com/delete/listItem/' + id, {

    })
        .then(function (response) {
            // console.log(self.props);
            // console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

const Card = (props) => {
    let swipeoutBtns = [
        {
            text: 'Delete',
            sensitivity: 10,
            backgroundColor: 'transparent',
            color: 'red',
            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            type: 'delete',
            onPress: () => { this.deleteItem(props.id) },
            autoClose: true,
        },
        // {
        //     text: 'Add',
        //     backgroundColor: 'green',
        //     underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
        //     type: 'delete',
        //     onPress: () => { console.log(props.id) }
        // }
    ]
    return (
        <Swipeout right={swipeoutBtns} id={props.id} style={styles.thisStyle}>
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