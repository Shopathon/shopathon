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
                    key={list.name}
                    list={list}
                    title={list.name}
                    id={list._id}
                    checked={checked}
                    onPress={() => this.setState({ checked: !checked })}
                />
            </Card>
        );
    }
}

export default ListCheckBox;