import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingPage = () => {
    return (
        <View style={styles.container}>
            <LottieView style={styles.animation} source={require("../../assets/Animation - 1717661192906.json")} autoPlay loop />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
    },
    animation: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent:"center"
    }

});

export default LoadingPage;