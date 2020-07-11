
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PokedexScreen from './src/screens/PokedexScreen';
import PokemonScreen from './src/screens/PokemonScreen';
import Back from './assets/svgs/back.svg'
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

const Stack = createStackNavigator();

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light} >
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Pokedex" component={PokedexScreen} options={{
          title: "",
          headerBackTitle: " ",
          headerTransparent: true,
          headerBackImage: () => {
            return <Back fill={'black'} style={[StyleSheet.absoluteFill, { width: 30, marginLeft: 20 }]} />;
          },
        }} />
        <Stack.Screen name="Pokemon" component={PokemonScreen} options={{
          title: "",
          headerBackTitle: " ",
          headerTransparent: true,
          headerBackImage: () => {
            return <Back fill={'white'} style={[StyleSheet.absoluteFill, { width: 30, marginLeft: 20 }]} />;
          },
        }} /> 
      </Stack.Navigator>
    </NavigationContainer>  
    </ApplicationProvider>
  );
}

export default App;