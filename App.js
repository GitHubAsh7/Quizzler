//import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import MyStack from './navigation';


import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';




const App = () => {
  return (
    <View style={styles.container}>

    <Home />
  
    </View>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});
