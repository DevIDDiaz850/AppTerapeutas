import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';


import { Ionicons } from '@expo/vector-icons';
const AudioThoughts = ({ navigation }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const startRecording = () => {
        // Lógica para comenzar a grabar
        setIsRecording(true);
    };

    const stopRecording = () => {
        // Lógica para detener la grabación
        setIsRecording(false);
    };

    const playRecording = () => {
        // Lógica para reproducir la grabación
        setIsPlaying(true);
    };

    const stopPlaying = () => {
        // Lógica para detener la reproducción
        setIsPlaying(false);
    };
    const [volume, setVolume] = useState(50);

    const togglePlayback = () => {
        setIsPlaying(!isPlaying);
        // Aquí debes implementar la lógica real de reproducción/pausa de audio
    };

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Index')}>
                    <Ionicons name="caret-back" size={45} color="#0FCCCE" />
                </TouchableOpacity>
                <Text style={styles.title}>Mis <Text style={{ color: "#0FCCCE" }}>Grabaciones</Text></Text>
            </View>
            <ScrollView contentContainerStyle={{ width: '100%' }} >
                

                <View style={styles.reproductor}>
                    <View style={styles.reproductorContainer}>
                        <TouchableOpacity style={styles.buttonPlay} onPress={togglePlayback} >
                            <View style={styles.buttonText}>{isPlaying ? <Ionicons name="pause-circle-outline" size={45} color="black" /> : <Ionicons name="play-circle-outline" size={45} color="black" />}</View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} >
                            <Ionicons name="trash-outline" size={30} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>

              
            </ScrollView>

            <View style={styles.record}>
                <TouchableOpacity
                    onPress={isRecording ? stopRecording : startRecording}
                >
                    <View>{isRecording ? <Ionicons name="mic-off-circle-outline" size={75} color="#fff" /> : <Ionicons name="mic-circle-outline" size={75} color="#fff" />
                    }</View>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'

    },
    header: {
        marginTop: 20,
        marginBottom: 15,
        flexDirection: 'row',
    },
    reproductorContainer: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    button:{
        left:150
    },
    buttonPlay:{
        left:25
    },
    reproductor: {
        width: '90%',
        height: 150,
        backgroundColor: '#fff',
        elevation: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 30,
        margin: 25,
        padding: 10,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    record: {
        width: '100%',
        height: '15%',
        backgroundColor: "#0FCCCE",
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginHorizontal: 60
    },

});

export default AudioThoughts;
