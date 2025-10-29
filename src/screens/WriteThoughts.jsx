import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WriteThougts = ({ navigation }) => {
    const [notes, setNotes] = useState([]);
  
    const addNote = (note) => {
      setNotes([...notes, note]);
    };
    return (

        <ScrollView>
        <View style={styles.container}>
            
            <View style={styles.headermain}>
                <TouchableOpacity  onPress={() => navigation.navigate('Index')}>
                <Ionicons name="caret-back" size={45} color="#0FCCCE" />
                </TouchableOpacity>
                <Text style={styles.header}>Notes</Text>
            </View>
          
          {notes.map((note, index) => (
            <View style={styles.card}>
                <Text key={index} style={styles.noteText}>{note}</Text>
            </View>
            
          ))}

          <TouchableOpacity style={styles.add} onPress={() => navigation.navigate('NoteEditor', { addNote })}>
          <Ionicons name="add-circle-outline" size={45} color="#0FCCCE" />
          </TouchableOpacity>
        </View>
        </ScrollView>
       
      );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f1f1f1',
      padding: 20,

    },
    headermain:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
    },
    header: {
      fontSize: 55,
      fontWeight: 'bold',
      color:"#000",
      justifyContent:'center',
      marginHorizontal:'24%'

    },
    noteText: {
      fontSize: 16,
      marginBottom: 10,
    },
    card:{
        
        borderRadius: 10,
        padding:20,
        backgroundColor:'#fff',
        marginBottom:10,
        elevation: 10,
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 10 },
    },
    add:{
        top:25
        
    }
  });
  
export default WriteThougts