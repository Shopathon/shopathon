import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { Button, Icon } from 'react-native-elements';

const StoreButton = (props) => {
   return(
        <View style={styles.listViewContainer}>
            <Button
                onPress={() => props.navigate("Links", { id: props.id })}
                buttonStyle={styles.listBox}
                icon={{ name:'shopping-cart', color:'white' }}
                title={
                    <Text>
                        <Text style={styles.listBoxHead}>{props.name}</Text>
                        <Text style={styles.listBoxEdit}>  View/Edit</Text>
                    </Text>
                }/>
        </View>
    );
};

const styles = StyleSheet.create({
    listViewContainer:{
        width: '100%'
    },
    listBox: {
        borderColor: 'white',
        borderWidth: 1,
        width: '100%', 
        height: 70, 
        backgroundColor: '#18454f50', 
        marginTop: 10, 
        padding: 15, 
        borderRadius: 50,
    },
    listBoxHead: {
        fontFamily: 'averia-serif',
        fontSize: 30,
        color: 'white', 
        textAlign: "center",
    },
    listBoxEdit: {
        fontFamily: 'averia-serif',
        color: "#9eeaae", 
        textAlign: "center", 
    },
});

export default StoreButton;