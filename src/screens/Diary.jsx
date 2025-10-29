import React from "react";
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function Diary({navigation}) {
    return (
            <ScrollView contentContainerStyle={{height:'110%'}}>
                <View style={{ flex: 1,}}>
                    {/* Test de ubicación */}
                    <View style={styles.subtitles} >
                        <Text style={{ color: 'black', fontWeight: 'normal',fontSize:50 }}>Bienvenido a</Text>
                        <Text style={{ color: '#0FCCCE', fontWeight: 'normal', fontSize:55 }}>tu diario!</Text>
                    </View>

                        <TouchableOpacity onPress={()=>{
                         navigation.navigate('Write')
                        }} >
                        <View style={styles.card}>
                        <Ionicons name="pencil-outline" size={50} color="#fff" />
                        <Text style={styles.cardTitle}>Escribir mis pensamientos</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{
                         navigation.navigate('Audio')
                        }} >
                        <View style={styles.card}>
                        <Ionicons name="headset-outline" size={50} color="#fff" />
                        <Text style={styles.cardTitle}>Audio de mis pensamientos</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{
                         navigation.navigate('Video')
                        }} >
                        <View style={styles.card}>
                        <Ionicons name="play-outline" size={50} color="#fff" />
                        <Text style={styles.cardTitle}>Video de mis pensamientos</Text>
                        </View>
                        </TouchableOpacity>
                    

                    
                  
                </View>

            </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#0FCCCE',
        width: '90%',
        height: 100,
        borderRadius: 30,
        marginBottom:50,
        marginHorizontal: '5%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        elevation: 8,
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 10 },
    
    },
    cardTitle: {
        marginHorizontal: 10,
        fontSize: 25,
        color: '#fff',
        fontWeight: 'normal',
        
    },
    subtitles:{
        paddingTop: 40,
        marginLeft: 20,
        marginBottom:50
    }
});

export default Diary