import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderMain = ({setUser, setImage }) => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, fontWeight:"bold", color:"#B7B7B7"
      }}><Text style={{color:"#0FCCCE"}}>Bienvenido</Text> {setUser}</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Perfil")}>
      <Image style={{width:45,height: 45, borderRadius:45, marginRight:15}} source={{ uri: setImage }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   width:"100%",
   height:70,
   backgroundColor:"#f1f1f1",
   flexDirection:"row",
   justifyContent:"space-between",
   alignItems:"center",
   marginTop:25,
   padding:20,
   borderBottomWidth:1,
   borderBottomColor:"#B7B7B7"
  },
});

export default HeaderMain;