
import React, { Component } from 'react';  
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
import FormView from './FormView';

class AddItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={{ uri: 'http://www.clker.com/cliparts/X/U/F/3/N/2/shopping-cart-logo.svg.hi.png' }}
                    />
                </View>
                <Text style={styles.title}> A form </Text>
                <View style={styles.myForm}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        color: 'red',
    },
    myForm: {
        flex: 1,
    },
});

export default AddItem;
