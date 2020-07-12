
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
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import PokemonCardOpener from './src/transitions/PokemonCardOpener';

const Stack = createStackNavigator();
const SharedStack = createSharedElementStackNavigator();

function SharedStackScreen() {
  return (
    <SharedStack.Navigator screenOptions={{
      ...PokemonCardOpener
    }}>
      <SharedStack.Screen name="Pokedex" component={PokedexScreen} options={{
        title: "",
        headerBackTitle: " ",
        headerTransparent: true,
        headerBackImage: () => {
          return <Back fill={'black'} style={[StyleSheet.absoluteFill, { width: 30, marginLeft: 20 }]} />;
        },
      }} />
      <SharedStack.Screen name="Pokemon" component={PokemonScreen}   
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { pokemonId } = route.params;
          return [
            `item.${pokemonId}.photo`,
            `item.${pokemonId}.name`
          ];
        }}
        options={{
          title: "",
          headerBackTitle: " ",
          headerTransparent: true,
          headerBackImage: () => {
            return <Back fill={'white'} style={[StyleSheet.absoluteFill, { width: 30, marginLeft: 20 }]} />;
          },
        }
      } /> 
    </SharedStack.Navigator>
  );
};

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light} >
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Poke" component={SharedStackScreen} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>  
    </ApplicationProvider>
  );
}

export default App;