import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AddForm extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> This is a form... </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default AddForm;