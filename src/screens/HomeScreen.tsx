import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Pokeball from '../../assets/svgs/pokeball.svg';
import HeroLayout from '../components/HeroLayout';

interface ButtonType {
  id: string;
  title: string;
  color: string;
  screen: string | null;
}

function itemRenderer(navigation) {
  return function({ item }) {
    return (
      <TouchableOpacity style={[styles.box, { backgroundColor: item.color }]} onPress={() => navigation.navigate("Poke" , { screen: item.screen })}>
        <View>
          <Pokeball style={[styles.miniPokeball]} />
          <Text style={styles.boxText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default function HomeScreen({ navigation }) {
  const buttons: [ButtonType] = [
    {
      id: '1',
      title: "Pokèdex",
      color: "#159F6E",
      screen: 'Pokedex'
    },
    {
      id: '2',
      title: "Moves",
      color: "#E4263B"
    },
    {
      id: '3',
      title: "Abilities",
      color: "#40A0CD"
    },
    {
      id: '4',
      title: "Items",
      color: "#F7A61B"
    },
    {
      id: '5',
      title: "Generations",
      color: "#366FC6"
    },
    {
      id: '6',
      title: "Types",
      color: "#B0B8C7"
    },
  ];
  return (
    <HeroLayout title="What Pokèmon are you looking for?" viewContainer={styles.viewContainer}>
      <FlatList
        scrollEnabled={false}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.containerView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={buttons}
        renderItem={itemRenderer(navigation)}
      />
    </HeroLayout>
  );
};

var styles = StyleSheet.create({
  viewContainer: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  miniPokeball: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: -80,
    top: -65,
    opacity: 0.5
  },
  containerView: {
    flexDirection: 'column',
    padding: 20,
  },
  row: {
    paddingTop: 10,
    justifyContent: 'space-between'
  },
  box: {
    flexBasis: '47%',
    justifyContent: 'center',
    borderRadius: 12,
    height: 60,
    marginBottom: 15,
    paddingLeft: 20,
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
  boxText: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    color: 'white'
   }
});