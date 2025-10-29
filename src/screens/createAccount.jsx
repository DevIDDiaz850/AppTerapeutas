import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import ButtonApp from "../components/button";
function CreateAccount({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.Titles}>Crear Cuenta</Text>
            <Text style={{ margin: 10, fontWeight: 'normal', color: 'grey' }}>Puedes crear tu cuenta llenando el formulario</Text>
            <TextInput style={styles.inputs} placeholder="Username"></TextInput>
            <TextInput style={styles.inputs} placeholder="joseL@gmail.com"></TextInput>
            <TextInput style={styles.inputs} placeholder="Contraseña"></TextInput>
            <TextInput style={styles.inputs} placeholder="Confirma tu contraseña"></TextInput>
            <ButtonApp onPress={()=>{
                navigation.navigate('Index')
             }}
            text='Crear mi cuenta' />
       
            <Text style={{margin:30, textAlign: 'center'}}>Al crear una cuenta, acepta nuestros  
            <Text style={{color:'#0FCCCE'}}> Términos de servicio</Text> y <Text style={{color:'#0FCCCE'}}>Política de privacidad</Text> </Text>
            <Text>¿Ya tienes cuenta? inicia sesión, 
                <TouchableOpacity onPress={()=>{
                navigation.navigate('SingUp')
                }} >
            <Text style={{color:'#0FCCCE'}}> presiona aquí.</Text></TouchableOpacity></Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
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


});

export default CreateAccount