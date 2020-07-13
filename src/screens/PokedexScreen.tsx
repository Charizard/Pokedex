import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import HeroLayout from '../components/HeroLayout';
import { useHeaderHeight } from '@react-navigation/stack';
import { useSafeArea } from 'react-native-safe-area-context';
import pokeData from '../utils/pokeData';
import PokeCard from '../components/PokeCard';

export default function PokedexScreen({ navigation }) {
  const [state, setState] = useState({ pokemons: [] });

  const headerHeight = useHeaderHeight();
  const insets = useSafeArea();

  useEffect(() => {
    const fetchPokemons = () => {
      setState({ pokemons: pokeData.slice(0, 20) });
    };

    fetchPokemons();
  }, []);

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
        data={state.pokemons}
        renderItem={({ item }) => {
          return <PokeCard navigation={navigation} pokemon={item} />
        }}
      />
    </HeroLayout>
  )
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'column',
    padding: 20,
  },
  row: {
    paddingTop: 5,
    justifyContent: 'space-between'
  },
});