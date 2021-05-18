import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader'


export default class JokeScreen extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
      <Text style={styles.textStyle}>*Libra (September 24-October 23)

Convincing a family member may not be as easy as it seems. Don't get careless on the road. Getting along with friends and relatives is likely to make the day more interesting. Keeping up with daily workouts is certain to keep you fit and energetic. You will be able to evaluate all options correctly before investing and benefit. A profitable day is foreseen for those involved in playing the stocks or betting.</Text>

<Text style={styles.textStyle}>Love Focus: Your caring nature will help your relationship blossom.</Text>

<Text style={styles.textStyle}>Lucky Colour: Rose</Text>

<Text style={styles.textStyle}>Lucky Alphabet: M</Text>

<Text style={styles.textStyle}>Friendly Numbers: 11, 14</Text>

<Text style={styles.textStyle}>Friendly Zodiac Today: Scorpio & Capricorn</Text>
    
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