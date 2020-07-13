import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Image, SafeAreaView } from 'react-native';
import PokeApi from '../apis/PokeApi';
import Loading from '../components/Loading';
import PokemonDetails from '../components/PokemonDetails';
import PokeTypePill from '../components/PokeTypePill';

import imageMapping from '../utils/pokeImageMapping';
import pokeColorMapping from '../utils/pokeColorMapping';

import { useHeaderHeight } from '@react-navigation/stack';
import HexagonBg from '../../assets/svgs/hexagon-bg.svg';
import { Text } from '@ui-kitten/components';
import { SharedElement } from 'react-navigation-shared-element';

export default function PokemonScreen({ route }) {
  const { pokemon } = route.params;
  const pokemonId = pokemon.id;
  const pokemonType = pokemon.type[0];
  const [ state, setState ] = useState({ pokemon: {}, isFetching: true });

  const headerHeight = useHeaderHeight();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await PokeApi.get(`pokemon/${pokemonId}`);
        setState({ pokemon: response.data, isFetching: false });
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <View style={[ { backgroundColor: pokeColorMapping[pokemonType] }, { paddingTop: headerHeight }]}>
      <SafeAreaView>
        <HexagonBg fill={"white"} style={[StyleSheet.absoluteFill, styles.backgroundHexagon]} />
        <View style={styles.safePadding}>
          <View style={styles.headlineText}>
            <SharedElement id={`item.${pokemonId}.name`}>
              <Text category="h2" style={styles.pokemonName}>{pokemon.name}</Text>
            </SharedElement>
            <Text category="h2" style={styles.pokemonName}>#{pokemon.number}</Text>
          </View>
          <FlatList
            listKey={`pokemonTypes.${pokemonId}`}
            contentContainerStyle={styles.typesContainer}
            data={pokemon.type}
            keyExtractor={(item) => item.toString() }
            renderItem={({ item }) => {
              return <PokeTypePill type={item} pokemonId={pokemonId}/>;
            }}
          />
        </View>

        <SharedElement id={`item.${pokemonId}.photo`} style={{ zIndex: 2 }}>
          <Image style={styles.pokemonImage} source={imageMapping[pokemonId]} />
        </SharedElement>
        <View style={styles.pokeDetailsContainer}>
          <View style={[styles.safePadding, { marginTop: 40 }]}>
            {state.isFetching ? <Loading /> : <PokemonDetails details={state.pokemon}/>}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safePadding: {
    marginHorizontal: 20,
  },
  backgroundHexagon: {
    width: 700,
    height: 500,
    top: -100,
    left: -70,
    opacity: 0.3
  },
  headlineText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pokemonName: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 30,
    color: 'white',
    textTransform: 'capitalize'
  },
  typesContainer: {
    marginTop: 5,
    flexDirection: 'row'
  },
  pokemonImage: {
    width: 250,
    height: 250,
    marginTop: -20,
    alignSelf: 'center',
    opacity: 1
  },
  pokeDetailsContainer: {
    zIndex: 1,
    justifyContent: "space-between",
    backgroundColor: 'white',
    marginTop: -50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  }
});