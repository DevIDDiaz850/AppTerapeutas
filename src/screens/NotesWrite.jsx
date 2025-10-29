
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, } from 'react-native';

const NoteEditorScreen = ({ navigation, route }) => {
  const { addNote } = route.params;

  if(addNote==''){
    
  }

  const [note, setNote] = useState('');

  const saveNote = () => {
    addNote(note);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Enter your note here"
        onChangeText={(text) => setNote(text)}
        value={note}
        textAlignVertical="top"
      />
      <Button title="Save Note" onPress={saveNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 20,
    display:'flex',
    justifyContent: "flex-start"
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  
  },
});

export default NoteEditorScreen;
