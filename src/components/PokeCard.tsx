import React from 'react';
import { StyleSheet, TouchableOpacity, Image, FlatList, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Text } from '@ui-kitten/components';
import imageMapping from '../utils/pokeImageMapping';
import pokeColorMapping from '../utils/pokeColorMapping';
import PokeTypePill from './PokeTypePill';
import { PokeDataType } from 'src/utils/pokeData';
import { NavigationProp } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

interface PokeCardProps {
  delay: number;
  navigation: NavigationProp;
  pokemon: PokeDataType;
}

export default function PokeCard({ navigation, pokemon, delay }: PokeCardProps) {
  const pokemonId = pokemon.id;
  const pokemonType = pokemon.type[0];

  const animation = {
    from: {
      translateX: 10,
      translateY: 10,
      opacity: 0
    },
    to: {
      translateX: 0,
      translateY: 0,
      opacity: 1
    }
  }
  return (
    <Animatable.View
      animation={animation}
      easing="ease-out-cubic"
      useNativeDriver
      delay={delay}
      style={[styles.box]}
      >
    <TouchableOpacity
      onPress={() => navigation.push('Pokemon', { pokemon }) }
      style={[{ backgroundColor: pokeColorMapping[pokemonType] }, styles.touch]}
    >
      <SharedElement
        id={`item.${pokemonId}.background`}
        style={styles.bg}
      />
      <View style={styles.leftCol}>
        <SharedElement id={`item.${pokemonId}.name`}>
          <Text style={styles.pokeName}>{pokemon.name}</Text>
        </SharedElement>
        <FlatList
          listKey={`list.${pokemonId}.type`}
          data={pokemon.type}
          scrollEnabled={false}
          keyExtractor={(item) => item.toString() }
          renderItem={({ item }) => {
            return <PokeTypePill type={item} pillContainerStyles={styles.pillContainerStyles} pokemonId={pokemonId} />;
          }}
        />
      </View>
      <SharedElement id={`item.${pokemonId}.photo`}>
        <Image style={styles.thumbNail} source={imageMapping[pokemonId]} />
      </SharedElement>
    </TouchableOpacity>    
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  touch: {
    flexDirection: 'row',
    flex: 1, 
    borderRadius: 12 
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  box: {
    flexBasis: '48%',
    height: 120,
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },
  thumbNail: {
    width: 90,
    height: 90,
    marginLeft: -10,
    marginTop: 20
  },
  pokeName: {
    fontFamily: 'SourceSansPro-Bold',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  pillContainerStyles: {
    marginTop: 5,
    marginRight: 0
  },
  leftCol: {
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});