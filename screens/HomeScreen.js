import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };

 
  render() {
    return (
      <View>
        <AppHeader />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => this.props.navigation.navigate('JokeScreen')}>
          <Text style={styles.buttonText}>Read a Joke</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'black' }]}
          onPress={() => this.props.navigation.navigate('TopNews')}>
          <Text style={styles.buttonText}>Top News</Text>
        </TouchableOpacity>

         <TouchableOpacity
          style={[styles.button, { backgroundColor: 'coral' }]}
          onPress={() => this.props.navigation.navigate('WeatherScreen')}>
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>

               <TouchableOpacity
          style={[styles.button, { backgroundColor: 'purple' }]}
          onPress={() => this.props.navigation.navigate('Horoscope')}>
          <Text style={styles.buttonText}>Horoscope for Libra</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Image
        style={{
          width:50,
          height:50,
          marginLeft:35
          
        }}
        
        source={require('../assets/thumbsdown.png')}
        />
</TouchableOpacity>

<TouchableOpacity>
        <Image
        style={{
          width:50,
          height:50,
          
          marginLeft:250
          
        }}
        
        source={require('../assets/thumbsup.png')}
        />
</TouchableOpacity>
      
      
      </View>


    );
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:2,
    borderRadius:15,
    marginTop:50,
    width:200,
    height:50

  },
  buttonText:{
    textAlign:'center',
    color:'white'

  }
})
