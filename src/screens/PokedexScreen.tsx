import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import HeroLayout from '../components/HeroLayout';
import { useHeaderHeight } from '@react-navigation/stack';
import { useSafeArea } from 'react-native-safe-area-context';
import pokeData, { PokeDataType } from '../utils/pokeData';
import PokeCard from '../components/PokeCard';
import { NavigationProp } from '@react-navigation/native';

interface PokedexScreenProps {
  navigation: NavigationProp;
}

interface PokedexScreenState {
  pokemons: Array<PokeDataType>
}

export default function PokedexScreen({ navigation }: PokedexScreenProps) {
  const [state, setState] = useState<PokedexScreenState>({ pokemons: [] });

  const headerHeight = useHeaderHeight();
  const insets = useSafeArea();

  useEffect(() => {
    const fetchPokemons = () => {
      setState({ pokemons: pokeData });
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
        renderItem={({ item, index }) => {
          return <PokeCard navigation={navigation} pokemon={item} delay={120 * Math.floor(index / 2)} />
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