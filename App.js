import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountryList from './components/CountryList/CountryList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Country List</Text>
        <View style={styles.titems}>
            <CountryList></CountryList>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    fontSize:35,  
    marginTop:35,  
    marginLeft:20,
  }
});
