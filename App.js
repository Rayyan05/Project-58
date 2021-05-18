import * as React from 'react';
import { View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import TopNews from './screens/TopNews';
import JokeScreen from './screens/JokeScreen'
import WeatherScreen from './screens/WeatherScreen'
import Horoscope from'./screens/Horoscope'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';


export default class App extends React.Component {
  render() {
    return (
      <View>
     <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  TopNews:TopNews,
  JokeScreen:JokeScreen,
  WeatherScreen:WeatherScreen,
  Horoscope:Horoscope


 
})

const AppContainer = createAppContainer(AppNavigator)
