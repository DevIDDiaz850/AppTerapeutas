import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity,TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function Test({ navigation }) {
    return (
        <View>
            <View style={styles.headermain}>
                    <Ionicons name="caret-back" size={45} color="#0FCCCE" />
                <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 30 }}>Realizar</Text>
                <Text style={{ color: '#0FCCCE', fontWeight: 'bold', fontSize: 35, marginHorizontal: 15 }}>Mi test!</Text>
            </View>
            <TextInput style={styles.inputs} placeholder="Buscar test"></TextInput>
        <ScrollView contentContainerStyle={{ height: '150%' }}>
        <View style={styles.container}>
           
                <View style={styles.containerCards}>
                    <TouchableOpacity onPress={() => navigation.navigate('Onboarding')} style={styles.card}>
                        <View style={styles.contenCard}>
                            <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 25 }}>Reanudar test de ubicación</Text>
                            <Ionicons style={{
                                transform: [{ rotate: '180deg' }], paddingHorizontal: 15
                            }} name="caret-back" size={35} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
        </View>
        </ScrollView>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    headermain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        marginEnd: '30 %'

    },
    header: {
        fontSize: 55,
        fontWeight: 'bold',
        color: "#000",
        justifyContent: 'center',
        marginHorizontal: '24%'

    },
    containerCards: {
        top:'3%',
        width: '100%',
        alignItems: 'center',
        
    },
    card: {
        width: '90%',
        height: 135,
        backgroundColor: '#0FCCCE',
        borderRadius: 20,
        elevation: 15,
        color: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    contenCard: {
        flexDirection: 'row',

    },
    inputs: {
        margin: 4,
        marginLeft:'5%',
        fontSize: 20,
        backgroundColor: '#fff',
        width: '90%',
        marginTop: '5%',
        borderRadius: 30,
        paddingStart: 15,
        height: 40,
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 8,
        },
    },
})