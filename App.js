import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  
  const cadastro = () =>{
    alert(nome);
    alert(email);
    alert(senha);
  }

  return (
    <View style={styles.container}>
       <StatusBar hidden />
       <Image style={styles.Image} source={require('./assets/Spott.png')}/>
       <TextInput placeholder='Digite Seu Nome Completo :'style={styles.TextInput} onChangeText={text=>setNome(text)}></TextInput>
       <TextInput placeholder='Digite Seu Email :' style={styles.TextInput} onChangeText={text=>setEmail(text)}></TextInput>
       <TextInput secureTextEntry={true} placeholder='Digite Sua Senha :' style={styles.TextInput} onChangeText={text=>setSenha(text)}></TextInput>
       <TouchableOpacity onPress={()=>cadastro()}><Text style={styles.Text} >CADASTRAR </Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems:'center',
    
    
  },
  TextInput:{
    width:'90%',
    height:45,
    backgroundColor:'#ffffff',
    marginTop:20,
    borderRadius:20,
    paddingLeft:17,
    
  },
  Image:{
    width:280,
    height:85,
    marginBottom:55
    
  },
  Text:{
    marginTop:30,
    fontSize:20,
    color:'white',
    
  }
});
