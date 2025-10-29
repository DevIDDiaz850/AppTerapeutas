import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonApp from './button';
import { TextInput } from 'react-native-gesture-handler';

const FormChange = ({ setName, setShowModal, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Quieres actualizar tu {title}</Text>
      <TextInput 
      placeholder='Ingresar nuevo nombre'
      defaultValue={setName}
      style={styles.inputName}
      ></TextInput>
      <ButtonApp text={"Actualizar"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius:50
  },
  inputName:{
    backgroundColor:'#fff',
    width:'80%',
    height:50,
    borderRadius:50,
    marginTop:20,
    padding:10
  },
  titles:{
    fontSize: 20,
    color:'#0FCCCE',
    fontWeight:'bold'
  }
});

export default FormChange;