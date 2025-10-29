import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';

const StoryDetailScreen = ({ route, navigation }) => {
  const defaultImageUrl = 'https://images.pexels.com/photos/20875624/pexels-photo-20875624/free-photo-of-mar-amanecer-paisaje-puesta-de-sol.jpeg';


  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: defaultImageUrl }} style={styles.imageBackground}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>Cerrar</Text>
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.username}>Diego</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  closeButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
    margin: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  userInfo: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    marginBottom: 20,
    marginLeft: 20,
    borderRadius: 10,
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StoryDetailScreen;
