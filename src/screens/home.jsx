import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from "react-native";
import axios from 'axios';
import Category from "../components/scrollImages";
import ButtonApp from "../components/buttonWhite";
import HeaderMain from "../components/Header";
import LoadingPage from "../components/Loading";

function Home({ navigation }) {
  const [therapists, setTherapists] = useState([]);
  const [therapistDetails, setTherapistDetails] = useState(null);

  useEffect(() => {
    const fetchTherapistData = async () => {
      try {
        const detailsResponse = await axios.get('https://api-generator.retool.com/ovxcuy/therapist_profile/5');
        setTherapistDetails(detailsResponse.data);

        const therapistsResponse = await axios.get('https://api-generator.retool.com/ovxcuy/therapist_profile/');
        setTherapists(therapistsResponse.data);
      } catch (error) {
        console.error('Error al obtener los detalles del terapeuta:', error);
      }
    };

    const delay = 1000;
    const timeoutId = setTimeout(fetchTherapistData, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!therapistDetails || !therapists) {
    return (
      <LoadingPage />
    );
  }

  const handleTherapistPress = (therapistId) => {
    navigation.navigate('TherapistP', { therapistId });
  };

  return (
    <ScrollView contentContainerStyle={{ height: '100%' }}>
      <View>
        <HeaderMain setUser={therapistDetails.name} setImage={therapistDetails.porfile_imge} />

        {/* Test de ubicación */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContentHistory}
          style={styles.scroll}
        >
          {therapists.map(therapist => (
            <TouchableOpacity onPress={() => handleTherapistPress(therapist.id)} key={therapist.id} style={styles.history}>
              <ImageBackground
                source={{ uri: therapist.porfile_imge }}
                style={styles.imageBackground}
                imageStyle={styles.image}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Empezar mi test</Text>
          <ButtonApp onPress={() => navigation.navigate('Tests')} style={styles.btn} text='Terminar test' />
        </View>

        {/* Scroll horizontal */}
        <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 32, left: "8%", top: 30, marginBottom: '5%' }}>
          Buscar<Text style={{ color: '#0FCCCE' }}> Terapeuta</Text>
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
          style={styles.scroll}
        >
          <Category imageUri={require('/Users/PC EXPRESS NAVOJOA/Documents/listentome-app/assets/imageScroll.jpg')} />
          <Category imageUri={require('/Users/PC EXPRESS NAVOJOA/Documents/listentome-app/assets/imageScroll.jpg')} />
        </ScrollView>

        {/* Contenido adicional */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: '#0FCCCE',
  },
  card: {
    backgroundColor: '#0FCCCE',
    width: '90%',
    height: 150,
    borderRadius: 20,
    paddingStart: 10,
    paddingTop: 25,
    marginHorizontal: '5%',
    elevation: 8,
    marginTop: "5%",
  },
  cardTitle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'normal',
  },
  btn: {
    marginStart: 30,
  },
  scrollViewContent: {
    left: "5%",
    marginTop: "5%",
    width: 'auto',
    height: 'auto',
  },
  scroll: {
    elevation: 8,
  },
  subtitles: {
    marginLeft: 20,
  },
  history: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#0FCCCE',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContentHistory: {
    left: "3%",
    marginTop: "5%",
    width: 'auto',
    height: 'auto',
  },
  imageBackground: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: '#0FCCCE',
    margin: 10,
  },
  image: {
    borderRadius: 505,
  },
});

export default Home;
