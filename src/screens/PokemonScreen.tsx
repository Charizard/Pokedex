import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Image, SafeAreaView } from 'react-native';
import PokeApi from '../apis/PokeApi';
import Loading from '../components/Loading';
import imageMapping from '../utils/pokeImageMapping';
import { useHeaderHeight } from '@react-navigation/stack';
import HexagonBg from '../../assets/svgs/hexagon-bg.svg';
import PokemonDetails from '../components/PokemonDetails';
import { Text } from '@ui-kitten/components';
import { SharedElement } from 'react-navigation-shared-element';

export default function PokemonScreen({ route }) {
  const pokemonId = route.params.pokemonId;
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

  if (state.isFetching) {
    return <Loading />;
  }

  const { pokemon } = state;
  const pokedexNumber = `${'0'.repeat(3 - `${pokemonId}`.length)}${pokemonId}`;
  return (
    <View style={[styles.pokemonHeroBackground, { paddingTop: headerHeight }]}>
      <SafeAreaView>
        <HexagonBg fill={"white"} style={[StyleSheet.absoluteFill, styles.backgroundHexagon]} />
        <View style={styles.safePadding}>
          <View style={styles.headlineText}>
            <SharedElement id={`item.${pokemonId}.name`}>
              <Text category="h2" style={styles.pokemonName}>{pokemon.name}</Text>
            </SharedElement>
            <Text category="h2" style={styles.pokemonName}>#{pokedexNumber}</Text>
          </View>
          <FlatList
            contentContainerStyle={styles.typesContainer}
            data={pokemon.types}
            keyExtractor={(item) => item.slot.toString() }
            renderItem={({ item }) => {
              return (
                <View style={styles.typeTag}>
                  <Text category="c1" style={styles.typeText}>{item.type.name}</Text>
                </View>
              );
            }}
          />
        </View>

        <SharedElement id={`item.${pokemonId}.photo`} style={{ zIndex: 2 }}>
          <Image style={styles.pokemonImage} source={imageMapping[pokemonId]} />
        </SharedElement>
        <View style={styles.pokeDetailsContainer}>
          <View style={[styles.safePadding, { marginTop: 40 }]}>
            <PokemonDetails details={pokemon}/>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonHeroBackground: {
    backgroundColor: '#159F6E',
  },
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
  typeTag: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 7
  },
  typeText: {
    color: 'white',
    textTransform: 'capitalize'
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