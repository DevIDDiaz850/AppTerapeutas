import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ButtonApp from "./button";
class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={this.props.imageUri}
                    style={styles.imageBackground}
                    imageStyle={styles.image}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.title}>Ver psicólogos disponibles para ti</Text>
                        <Text style={styles.subtitle}>6 terapeutas disponibles.</Text>
                        <ButtonApp text='Ver más' />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default Category;

const styles = StyleSheet.create({
    container: {
        height: 220,
        marginHorizontal: 10,
        borderRadius: 20,
        elevation: 5,
        justifyContent:'center'
    },
    imageBackground: {
        width: "auto",
        height: 220,
        justifyContent: "center",
        alignItems: "center",
        

    },
    image: {
        borderRadius: 20,
        
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 10,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        justifyContent:'center',
        height: 220
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "normal",
        textAlign: "center",
    },
    subtitle: {
        color: "white",
        fontSize: 16,
    },

});
