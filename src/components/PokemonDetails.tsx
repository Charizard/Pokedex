import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Layout, Tab, TabView, Text } from '@ui-kitten/components';
import PokeAbout from './PokeAbout';
import PokeStats from './PokeStats';

export default function PokemonDetails({ details }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <TabView
      tabBarStyle={styles.tabView}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <Tab title='About'>
        <PokeAbout details={details}/>
      </Tab>
      <Tab title='Stats'>
        <PokeStats details={details}/>
      </Tab>
      <Tab title='Evolution'>
        <Layout style={styles.tabContainer}>
          <Text category='h2'>Evolution</Text>
        </Layout>
      </Tab>
      <Tab title='Moves'>
        <Layout style={styles.tabContainer}>
          <Text category='h2'>Moves</Text>
        </Layout>
      </Tab>
    </TabView>
  );
};

const styles = StyleSheet.create({
  tabView: {
    justifyContent: "space-between"
  }
});