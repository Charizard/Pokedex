import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Text } from '@ui-kitten/components';
import imageMapping from '../utils/pokeImageMapping';
import pokeColorMapping from '../utils/pokeColorMapping';

export default function PokeCard({ navigation, pokemon }) {
  const pokemonId = pokemon.id;
  const pokemonType = pokemon.type[0];

  return (
    <TouchableOpacity
      onPress={() => navigation.push('Pokemon', { pokemon }) }
      style={[styles.box, { backgroundColor: pokeColorMapping[pokemonType] }]}
      >
      <SharedElement id={`item.${pokemonId}.name`}>
        <Text style={styles.pokeName}>{pokemon.name}</Text>
      </SharedElement>
      <SharedElement id={`item.${pokemonId}.photo`}>
        <Image style={styles.thumbNail} source={imageMapping[pokemonId]} />
      </SharedElement>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    flexBasis: '47%',
    justifyContent: 'center',
    borderRadius: 12,
    height: 120,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    overflow: "hidden",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  thumbNail: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    marginRight: -10,
    marginBottom: -10
  },
  pokeName: {
    fontFamily: 'SourceSansPro-Regular',
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    marginTop: -5,
    textTransform: 'capitalize',
    position: 'absolute'
  }
});