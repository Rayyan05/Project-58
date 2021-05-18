import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader'


export default class JokeScreen extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
      <Text style={styles.textStyle}>1.Yes,money cannot buy happiness
      but it is way more comfortable to cry in a new BMW than to cry on bike.</Text>
      <Text style={styles.textStyle}>2.What do you get from a pampered cow?
      Spoilt milk</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 
 textStyle: {
  
    fontWeight: 'bold',
    fontSize: 20,
    marginTop:50
  }
});
  
  
    
  


