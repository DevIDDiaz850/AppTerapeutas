import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Modal from '../components/Modal'; // Ensure the correct path is used
import FormChange from '../components/Formulario';
import { Ionicons } from '@expo/vector-icons';
import LoadingPage from '../components/Loading';

function Perfil({ navigation }) {
  const [therapistDetails, setTherapistDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  useEffect(() => {
    const fetchTherapistDetails = async () => {
      try {
        const response = await axios.get('https://api-generator.retool.com/ovxcuy/therapist_profile/5');
        setTherapistDetails(response.data);
      } catch (error) {
        console.error('Error al obtener los detalles del terapeuta:', error);
      }
    };

    const delay = 1000;
    const timeoutId = setTimeout(fetchTherapistDetails, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!therapistDetails) {
    return (
        <LoadingPage />
    );
  }

  const selectComponent = (key) => {
    switch (key) {
      case 'setName':
        setRenderComponent(
          <FormChange
            setName={therapistDetails.name}
            setShowModal={setShowModal}
            title='nombre'
          />
        );
        break;
      case 'setEmail':
        setRenderComponent(
          <FormChange
            setName={therapistDetails.email}
            setShowModal={setShowModal}
            title='correo'
          />
        );
        break;
      case 'setPhone':
        setRenderComponent(
          <FormChange
            setName={therapistDetails.phone}
            setShowModal={setShowModal}
            title='teléfono'
          />
        );
        break;
      default:
        break;
    }
    setShowModal(true);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnImage}>
          <ImageBackground
            source={{ uri: therapistDetails.porfile_imge }}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 250 }}
          >
            <View style={styles.containerimg}>
              <Ionicons style={styles.iconImage} name="image" size={35} color="#B7B7B7" />
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnOptions} onPress={() => selectComponent('setName')}>
          <Ionicons name="person-outline" size={30} color="#B7B7B7" />
          <Text style={styles.text}>Nombre: {therapistDetails.name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnOptions} onPress={() => selectComponent('setEmail')}>
          <Ionicons name="mail-outline" size={30} color="#B7B7B7" />
          <Text style={styles.text}>Correo: {therapistDetails.email}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnOptions} onPress={() => selectComponent('setPhone')}>
          <Ionicons name="call-outline" size={30} color="#B7B7B7" />
          <Text style={styles.text}>Teléfono: {therapistDetails.phone}</Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={showModal} setVisible={setShowModal}>
        {renderComponent}
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginHorizontal: 25,
    color: '#B7B7B7',
  },
  containerimg: {
    backgroundColor: '#f1f1f1',
    height: 70,
    width: 250,
    marginTop: 213,
    borderRadius: 250,
  },
  iconImage: {
    marginStart: 108,
  },
  imageBackground: {
    width: 250,
    height: 250,
    alignItems: 'center',
    marginBottom: '10%',
  },
  btnImage: {
    width: '100%',
    height: 270,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: '#B7B7B7',
    borderBottomWidth: 1,
    marginTop: 40,
  },
  BtnOptions: {
    width: '100%',
    height: 70,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: '#B7B7B7',
    borderBottomWidth: 1,
    padding: 10,
    flexDirection: 'row',
  },
});

export default Perfil;
