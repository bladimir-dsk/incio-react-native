import React from 'react'
import { Image, StyleSheet, Platform, Text, View, Button, SafeAreaView } from 'react-native';

function index() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{paddingTop: Platform.OS === "android" && 30}}>
    <Text style={styles.text}>Hola mundo</Text>
    
    </View>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
 
  container: {
    flex: 1,

  },
  text: {
    fontSize: 32, 
    fontWeight: "bold", 
    color: "black", 
    
  }
 
});

export default index