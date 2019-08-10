// code from baba, error ketika input
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {

  state = {
    text: "",
    button: []
  };

  textChangeHandler = val => {
    this.setState({
      text: val
    });
  };

  buttonSubmitHandler = () => {
    if (this.state.text.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.button.concat(prevState.text)
      }
    })
  }

  const textOutput = this.state.button.map(place => (
    <Text>{place}</Text>
  ))

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: "flex-start", alignItems: "flex-start" }}>
      <View style={{ flexDirection: 'row', paddingTop: 26, justifyContent: "space-between", alignItems: "center" }}>

        <Text
          style={{ marginRight: 10, paddingTop: 5 }}
        >Nama :</Text>
        <TextInput
          style={{ marginRight: 30, width: 200, borderColor: 'gray', borderWidth: 1 }}
          placeholder='Masukkan Nama'
          value={this.state.text}
          onChangeText={this.textChangeHandler}
        />
        <Button
          title='Input'
          onPress={this.buttonSubmitHandler}
        />
      </View>
      <View>
        {textOutput}
      </View>
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
