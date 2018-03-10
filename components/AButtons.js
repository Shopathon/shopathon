<Button
    onPress={() => navigate('Links')}
    buttonStyle={styles.listBox}
    icon={{name:'shopping-cart', color:'white'}}
    title={ 
        <Text>
        <Text style={styles.listBoxHead}>Walmart</Text>
        <Text style={styles.listBoxEdit}>  View/ Edit</Text>
        </Text>
    }
/>

<Button
    onPress={() => navigate('Links')}
    buttonStyle={styles.listBox}
    icon={{name:'shopping-cart', color:'white'}}
    title={ 
        <Text>
        <Text style={styles.listBoxHead}>Costco</Text>
        <Text style={styles.listBoxEdit}>  View/ Edit</Text>
        </Text>
    }
/>

<Button
    onPress={() => navigate('Links')}
    buttonStyle={styles.listBox}
    icon={{name:'shopping-cart', color:'white'}}
    title={ 
        <Text>
        <Text style={styles.listBoxHead}>Target</Text>
        <Text style={styles.listBoxEdit}>  View/ Edit</Text>
    </Text>
    }
/>

<Button
    onPress={() => navigate('Links')}
    buttonStyle={styles.listBox}
    icon={{name:'shopping-cart', color:'white'}}
    title={ 
        <Text>
        <Text style={styles.listBoxHead}>Smiths</Text>
        <Text style={styles.listBoxEdit}>  View/ Edit</Text>
    </Text>
    }
/>

listBox: {
    borderColor: 'white',
    borderWidth: 1,
    width: 340, 
    height: 70, 
    backgroundColor: '#00000035', 
    marginTop: 10, 
    padding: 15, 
    borderRadius: 50,
},
listBoxHead: {
    fontFamily: 'averia-serif',
    fontSize: 30,
    color: 'white', 
    // fontWeight: "bold", 
    textAlign: "center",
},
listBoxEdit: {
    fontFamily: 'averia-serif',
    color: "#9eeaae", 
    textAlign: "center", 
},