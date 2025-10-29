import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

function TherapistDetails({ route,navigation }) {
    const { therapistId } = route.params;
    const [therapistDetails, setTherapistDetails] = useState(null);

    useEffect(() => {
        axios.get(`https://api-generator.retool.com/ovxcuy/therapist_profile/${therapistId}`)
            .then(response => {
                setTherapistDetails(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los detalles del terapeuta:', error);
            });
    }, [therapistId]);

    if (!therapistDetails) {
        return (
            <View style={styles.container}>
                <Text>Cargando...</Text>
            </View>
        );
    }

    return (
        <ScrollView>

            <View style={styles.header}>
                <TouchableOpacity  onPress={() => navigation.navigate('Therapistli')}>
                    <Ionicons name="caret-back" size={45} color="#0FCCCE" />
                </TouchableOpacity>

                <Text style={styles.titleHeader}>
                    Perfi de <Text style={{color:'#0FCCCE'}}>{therapistDetails.name}</Text>
                </Text>
            </View>
            <View style={styles.container}>
                <ImageBackground
                    source={{ uri: therapistDetails.porfile_imge }}
                    style={styles.imageBackground}
                    imageStyle={styles.image}
                ></ImageBackground>

                <Text style={styles.title}>{therapistDetails.name}</Text>
                <Text style={styles.text}>Correo: {therapistDetails.email}</Text>
                <Text style={styles.text}>Teléfono: {therapistDetails.phone}</Text>
                <Text style={styles.text}>Horarios: {therapistDetails.dates}</Text>

                <Text style={styles.subtitle}>
                    Opciones de Reunion
                </Text>

                <View style={styles.options}>
                    <TouchableOpacity style={styles.llamar}>
                        <Ionicons name="phone-portrait-outline" size={24} color="white" />
                        <Text style={styles.btnText}>
                            Llamar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mensaje}>
                        <Ionicons name="chatbubble-outline" size={24} color="white" />
                        <Text style={styles.btnText}>
                            Enviar mensaje
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}

export default TherapistDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#0FCCCE'
    },
    titleHeader: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',

    },
    text: {
        fontSize: 18,
        marginBottom: 5,
    },
    imageBackground: {
        width: 300,
        height: 300,
        justifyContent: 'flex-end',
        marginBottom: '4%'
    },
    image: {
        borderRadius: 250,
    },
    llamar: {
        width: 145,
        height: 50,
        backgroundColor: '#0FCCCE',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginHorizontal: 10,
        marginTop: 20,
        flexDirection: 'row',
        elevation: 10


    },
    mensaje: {
        width: 145,
        height: 50,
        backgroundColor: '#0FCCCE',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginHorizontal: 10,
        marginTop: 20,
        flexDirection: 'row',
        padding: 5,
        elevation: 10
    },
    options: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnText: {
        color: "#fff",
        fontWeight: 'bold',
        marginHorizontal: 5
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 34,
        marginTop: 15,
        color: '#0FCCCE'
    }
});
