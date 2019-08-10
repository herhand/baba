// code from baba, error ketika input
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {
  state = {
    text: ""
  };

  textChangeHandler = val => {
    this.setState({
      text: val
    });
  };

  return (
    <View style={styles.container}>
      <Text>Hello, Saya sedang belajar React Native</Text>

      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={this.textChangeHandler}
        value={this.state.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/* // code from tutorial
import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
} */
