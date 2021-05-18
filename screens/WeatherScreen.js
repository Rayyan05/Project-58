import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader'


export default class JokeScreen extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
      <Text style={styles.textStyle}>Its currently clear and 30 degrees celcius in Bangalore,India.With a Humidity of 55% and a wind speed of 16km/h.Today we can expect a high of 33 degrees and a low of 23 degrees.</Text>
    
      </View>
    )
  }
}

const styles = StyleSheet.create({
 
 textStyle: {
  
    fontWeight: 'italics',
    fontSize: 20,
    marginTop:50
  }
});