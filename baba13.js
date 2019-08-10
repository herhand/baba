import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        paddingTop: 26,
        justifyContent: "center",
        alignItems: "flex-start"
      }}>
        <Text
          style={{ marginRight: 10, paddingTop: 10 }}
        >Nama :</Text>
        <TextInput
          style={{ marginRight: 10, width: 200, paddingTop: 10, borderWidth: 1, borderColor: 'gray' }}
          placeholder='Masukkan Nama'
        />
        <Button
          title="Input"
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
