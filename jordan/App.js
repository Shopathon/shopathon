import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import CheckBox, { Button } from 'react-native-elements';

import Header from './components/Header';
import ShopList from './components/ShopList';
// import AddItem from './components/AddItem';
import FormView from './components/FormView';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addItem: false,
      key: '',
    }
  }

  render() {
    return (
      <View >
        <Header headerText={"Target"}
        />
        <KeyboardAvoidingView behavior={'position'}>
            <ShopList
              style={styles.container}
              addItem={this.state.addItem}
              key={this.state.key}
            />
            <FormView />
          </KeyboardAvoidingView>
      </View>
          );
        }
      }
      
const styles = StyleSheet.create({
            container: {
            flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
      
      export default App;
