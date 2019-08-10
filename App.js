import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    kata: "1",
    button: []
  };

  kataChangeHandler = val => {
    this.setState({
      kata: val
    })
  }

  btnSubmitHandler = () => {
    if (this.state.kata.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        button: prevState.button.concat(prevState.kata)
      }
    })
  }

  render() {
    const textOutput = this.state.button.map((place, i) => (
      <Text key={i}>{place}</Text>
    ));

    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: "flex-start", alignItems: "flex-start" }}>
        <View style={{ flexDirection: 'row', paddingTop: 26, justifyContent: "space-between", alignItems: "center" }}>
          <Text
            style={{ marginRight: 10, paddingTop: 5 }}
          >Nama :</Text>
          <TextInput
            style={{ marginRight: 10, width: 200, paddingTop: 10, borderWidth: 1, borderColor: 'gray' }}
            placeholder='Masukkan Nama'
            value={this.state.kata}
            onChangeText={this.kataChangeHandler}
          />
          <Button
            title="Input"
            onPress={this.btnSubmitHandler}
          />
        </View>
        <View>
          {textOutput}
        </View>
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
