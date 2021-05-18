import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader'


export default class JokeScreen extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
      <Text style={styles.textStyle}>1.England Tests not warm-ups for World Test Championship final: Neil Wagner. ...

<Text style={styles.textStyle}>2.Mumbai: Dharavi Covid warrior continues helping people from hospital bed</Text></Text>
      <Text style={styles.textStyle}>3.Black fungus treatment for Covid-recovered begins in Bengaluru from today. ...</Text>
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
  
  
    
  


