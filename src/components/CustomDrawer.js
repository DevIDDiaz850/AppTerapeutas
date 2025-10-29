import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import axios from 'axios';

const CustomDrawer = (props) => {
    const { navigation } = props; // Destructure navigation from props
    const [therapistDetails, setTherapistDetails] = useState(null);

    useEffect(() => {
        const fetchTherapistDetails = async () => {
            try {
                const response = await axios.get('https://api-generator.retool.com/ovxcuy/therapist_profile/3');
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
            <View style={styles.container}>
                <Text>Cargando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#f1f1f1' }}
            >
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                    <ImageBackground
                        source={{ uri: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                        style={{ padding: 20, marginBottom: 10 }}>
                        <Image
                            source={{ uri: therapistDetails.porfile_imge }}
                            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                        />
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                marginBottom: 5,
                            }}>
                            {therapistDetails.name}
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1"
    },
});

export default CustomDrawer;