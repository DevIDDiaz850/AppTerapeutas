import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import ButtonApp from '../components/button'
import LottieView from 'lottie-react-native';



function SingUp({ navigation }) {

    return (
        <View style={styles.container}>
                <LottieView
                    source={require('../../assets/Animation - 1708933055689.json')} // Ruta al archivo de animación
                    autoPlay
                    loop
                    style={styles.animation}
                />
            <Text style={styles.Titles}>Iniciar sesión</Text>
            <TextInput style={styles.inputs} placeholder="joseL@gmail.com"></TextInput>
            <TextInput style={styles.inputs} placeholder="Contraseña"></TextInput>
            <ButtonApp
                onPress={() => {
                    navigation.navigate('Index')
                }}
                text='Iniciar sesión'></ButtonApp>
            <Text style={styles.subtitles} >¿Haz perdido tu contraseña?
                <TouchableOpacity onPress={() => {
                    navigation.navigate('SingUp')
                }} >
                    <Text style={{ color: '#0FCCCE' }}> presiona aquí.</Text></TouchableOpacity></Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Titles: {
        fontWeight: 'bold',
        fontSize: 45,
        color: '#0FCCCE'
    },
    inputs: {
        margin: 4,
        fontSize: 20,
        backgroundColor: '#fff',
        width: '80%',
        marginTop: 10,
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
    subtitles: {
        marginTop: 25
    },
    animation:{
        width: 350,
        height: 350,
        alignItems:'center',
    }

});

export default SingUp