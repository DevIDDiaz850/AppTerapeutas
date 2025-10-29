import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';

function Therapists({navigation}) {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    axios.get("https://api-generator.retool.com/ovxcuy/therapist_profile/")
      .then(response => {
        setTherapists(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los perfiles de terapeutas:', error);
      });
  }, []);
  if (!therapists) {
    return (
      <View>
        <Text>
          Cargando...
        </Text>
      </View>
    )
  }

  const handleTherapistPress = (therapistId) => {
    navigation.navigate('TherapistP', { therapistId });
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="caret-back" size={45} color="#0FCCCE" />
        </TouchableOpacity>
        <Text style={styles.title}>
          Buscar <Text style={{ color: "#0FCCCE" }}>terapeuta</Text>
        </Text>
      </View>
      <TextInput style={styles.inputs} placeholder="Buscar"></TextInput>

      {therapists.map(therapist => (
        <TouchableOpacity key={therapist.id} onPress={() => handleTherapistPress(therapist.id)}>
          <ImageBackground
            source={{ uri: therapist.porfile_imge }}
            style={styles.imageBackground}
            imageStyle={styles.image}
          >
            <View style={styles.overlay}>
              <Text style={styles.text}>
                {therapist.name}
              </Text>
              <Text style={styles.textCorreo}>
                {therapist.email}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default Therapists;

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginHorizontal: '5%',
 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  textCorreo: {
    marginHorizontal: 15,
    fontSize: 15
  },
  inputs: {
    margin: 4,
    marginLeft: '5%',
    fontSize: 20,
    backgroundColor: '#fff',
    width: '90%',
    marginTop: '5%',
    borderRadius: 30,
    paddingStart: 15,
    height: 50,
    marginBottom: '5%'

  },
  imageBackground: {
    width: "90%",
    height: 150,
    marginHorizontal: '8.5%',
    justifyContent: 'flex-end',
    marginBottom: '4%'
  },
  image: {
    borderRadius: 25,
  },
  overlay: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    display: 'flex',
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignContent: 'center',
    padding: 6,
    paddingHorizontal: 15,
    elevation: 10,
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  },

});
