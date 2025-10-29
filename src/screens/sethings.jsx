import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import axios from "axios"
import LoadingPage from "../components/Loading";

function Settings({ navigation }) {
    const [therapistDetails, setTherapistDetails] = useState(null);

    useEffect(() => {
        const fetchTherapistDetails = async () => {
            try {
                const response = await axios.get(`https://api-generator.retool.com/ovxcuy/therapist_profile/3`);
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

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={styles.perfil}>
                    <Image
                        source={{ uri: therapistDetails.porfile_imge }}
                        style={styles.imageBackground}
                    ></Image>
                    <Text style={styles.txtPerfil}>
                    {therapistDetails.name}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cuenta')} style={styles.btn}>
                <Ionicons name="key-outline" size={30} color="#0FCCCE" />
                    <Text style={styles.txtBtn}>
                        Cuenta
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                <Ionicons name="lock-closed-outline" size={30} color="#0FCCCE" />
                    <Text style={styles.txtBtn}>
                        Privacidad
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                <Ionicons name="notifications-outline" size={30} color="#0FCCCE" />
                    <Text style={styles.txtBtn}>
                        Notificaciones
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                <Ionicons name="help" size={30} color="#0FCCCE" />
                    <Text style={styles.txtBtn}>
                        Ayuda
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                <Ionicons name="close" size={30} color="#0FCCCE" />
                    <Text style={styles.txtBtn}>
                        Cerrar Sesión
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )

}
export default Settings

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent:'center'
    },
    perfil: {
        width: '100%',
        height: 120,
        marginTop: 5,
        padding:10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-start',
        borderBottomWidth:.5,
        borderBottomColor:'#0FCCCE'
    },
    txtPerfil:{
        fontSize:20,
        padding:10,
        fontWeight:'bold',
        color:'#0FCCCE'
    },
    btn: {
        width: '100%',
        height: 65,
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-start',
        borderBottomWidth:.5,
        borderBottomColor:"#0FCCCE"
    },
    txtBtn:{
        fontSize:15,
        padding:10,
        fontWeight:'light',
        color:'#0FCCCE'
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        marginHorizontal: '5%',

    },
    imageBackground: {
        width: 100,
        height: 100,
        justifyContent: 'flex-start',
        borderRadius: 100,        
    },

})