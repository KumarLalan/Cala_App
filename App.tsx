// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Reaction from './components/reacttion';
import Elements from './components/elements';
import HomeScreen from './components/Home';
import SplashScreen from './components/splash';
import Load from './components/load';
import  ElementsPage    from  './components/elementspage';
import ReactionPage from './components/ReactionPage'
import 'react-native-gesture-handler'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Load">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="Load" 
          component={Load} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="ReactionPage" 
          component={ReactionPage} 
          options={{ headerShown: false }} 
        />
          <Stack.Screen 
          name="Elementspage" 
          component={ElementsPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="Reaction" 
          component={Reaction} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Elements" 
          component={Elements} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
