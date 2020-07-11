import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import PokeApi from '../apis/PokeApi';
import Loading from '../components/Loading';
import imageMapping from '../utils/pokeImageMapping';
import HeroLayout from '../components/HeroLayout';
import { useHeaderHeight } from '@react-navigation/stack';
import { useSafeArea } from 'react-native-safe-area-context';

function renderPokemon(navigation) {
  return function({ item }) {
    let pokemonId: number = item.url.match(/([^/?]+)(?=\/?(?:$|\?))/)[0];
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Pokemon', { pokemonId }) }
        style={[styles.box, { backgroundColor: '#159F6E' }]}
        >
        <Image style={styles.thumbNail} source={imageMapping[pokemonId]} />
        <Text style={styles.pokeName}>
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  };
}

export default function PokedexScreen({ navigation }) {
  const [state, setState] = useState({ pokemons: {}, isFetching: true});

  const headerHeight = useHeaderHeight();
  const insets = useSafeArea();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await PokeApi.get('pokemon');
        setState({ pokemons: response.data, isFetching: false });
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemons();
  }, []);

  if (state.isFetching) {
    return <Loading />;
  }

  return (
    <HeroLayout title="Pokédex" style={{ paddingTop: headerHeight - insets.top }}>
      <FlatList
        scrollEnabled={true}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.containerView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={state.pokemons.results}
        keyExtractor={(item) => item.url }
        renderItem={renderPokemon(navigation)}
      />
    </HeroLayout>
  )
};

const styles = StyleSheet.create({
  pokeName: {
    fontFamily: 'SourceSansPro-Regular',
    color: 'white',
    fontSize: 16,
    textTransform: 'capitalize'
  },
  containerView: {
    flexDirection: 'column',
    padding: 20,
  },
  row: {
    paddingTop: 5,
    justifyContent: 'space-between'
  },
  box: {
    flexBasis: '47%',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 90,
    height: 90
  }
});