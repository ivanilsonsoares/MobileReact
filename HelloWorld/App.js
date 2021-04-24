import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper'

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Hello World!!</Text>
      <StatusBar style="auto"/>      
      <FAB
      style= {styles.fab}
      small
      icon="plus"
      onPress={() => console.log("pressed")}
      
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab:{
    position: 'absolute',
    margin: 30,
    width:50,
    height:50,
    right:0,
    bottom:0,
    backgroundColor:'steelblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    flex:1,
    padding:50,
    fontSize:30,
    
  }
});


