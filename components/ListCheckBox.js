import React, { Component } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';

import Card from './Card';

class ListCheckBox extends Component {
    constructor() {
        super();
        this.state = {
            checked: false,
        };
    }

    render() {
        const { list } = this.props;
        const { checked } = this.state;

        return (
            <Card
            id={list._id}
            >
                <CheckBox
                    containerStyle={styles.checkBox}
                    textStyle={styles.checkText}
                    key={list.name}
                    list={list}
                    title={list.name}
                    id={list._id}
                    checked={checked}
                    uncheckedColor='white'
                    onPress={() => this.setState({ checked: !checked })}
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