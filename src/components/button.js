import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonApp = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0FCCCE",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 10,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ButtonApp;
