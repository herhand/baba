import React from 'react'; 
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'; 

export default class App extends React.Component { 
  state = { 
    text:"", 
    button:[] 
  }; 

  textChangeHandler = val => { 
      this.setState({ 
        text : val 
      }); 
  }; 


buttonSubmitHandler = () => { 
   if(this.state.text.trim() === ""){ 
    return; 
   }  
   this.setState(prevState=>{ 
     return{ 
       button:prevState.button.concat(prevState.text) 
     } 
   }) 

} 
render() { 
  const TextOutput = this.state.button.map((place,i)=>( 
    <Text key={i}>{place}</Text> 
  )); 
  return ( 
     
    <View style={{flex: 1, flexDirection: 'column', justifyContent:'flex-start', alignItems:'flex-start'}}> 
     <View style={{flexDirection: 'column', paddingTop:26, justifyContent:'space-between', alignItems:'center'}}> 
      <Text 
        style={{marginRight:10, paddingTop:5}} 
      >Nama : </Text> 
      <TextInput 
        style={{marginRight:10, width:200, borderColor: 'gray', borderWidth: 1}} 
        placeholder='masukan Nama' 
        value={this.state.text} 
        onChangeText={this.textChangeHandler} 
              
      /> 
        

      <Button 
       title="Input" 
       onPress = {this.buttonSubmitHandler} 
      /> 
      </View> 
      <View>{TextOutput}</View> 
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
