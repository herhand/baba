import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {

  state = {
    kata: ""
  };

  kataChangeHandler = val => {
    this.setState({
      kata: val
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>Hello, saya sedang belajar React Native</Text>

        <TextInput
          style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={this.kataChangeHandler}
          value={this.state.kata}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
