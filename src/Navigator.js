import {
    TabNavigator,
  } from 'react-navigation';
 
import Home from './screens/home/Home';
import About from './screens/about/About';


export const Navigator = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
          },
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'About',
          },
    },
  });