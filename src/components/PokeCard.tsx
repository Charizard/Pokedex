import React from 'react';
import { StyleSheet, TouchableOpacity, Image, FlatList, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Text } from '@ui-kitten/components';
import imageMapping from '../utils/pokeImageMapping';
import pokeColorMapping from '../utils/pokeColorMapping';
import PokeTypePill from './PokeTypePill';

export default function PokeCard({ navigation, pokemon }) {
  const pokemonId = pokemon.id;
  const pokemonType = pokemon.type[0];

  return (
    <TouchableOpacity
      onPress={() => navigation.push('Pokemon', { pokemon }) }
      style={[styles.box, { backgroundColor: pokeColorMapping[pokemonType] }]}
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
  );
};

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // backgroundColor: "blue",
    // borderWidth: 1,
    // borderColor: 'red'
  },
  box: {
    flexBasis: '48%',
    flexDirection: 'row',
    borderRadius: 12,
    height: 120,
    marginBottom: 12,
    // padding: 10,
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