// code from baba, error ketika input
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {

  state = {
    text: "Please input your full name"
  };

  textChangeHandler = val => {
    this.setState({
      text: val
    });
  };


  return (
    // <View style={styles.container}>
    //   <Text>Hello, Saya sedang belajar React Native</Text>

    //   <TextInput
    //     style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
    //     onChangeText={this.textChangeHandler}
    //     value={this.state.text}
    //   />
    // </View>


    <View style={{ flex: 1, flexDirection: 'column', paddingTop: 26, justifyContent: "center", alignItems: "stretch" }}>
      <Text
        style={{ marginLeft: 20 }}
      >Nama :</Text>
      <TextInput
        style={{ marginLeft: 50, width: 300, borderColor: 'gray', borderWidth: 1 }}
        placeholder='Masukkan Nama'
      />
      <Button
        title='Input'
        color='pink'
        accessibilityLabel='Input Nama ke system'
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
