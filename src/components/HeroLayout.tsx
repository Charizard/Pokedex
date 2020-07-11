import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import Pokeball from '../../assets/svgs/pokeball.svg';

export default function HeroLayout({ children, title, style, viewContainer }) {
  return (
    <SafeAreaView style={[styles.safeView, viewContainer]}>
      <View>
        <Pokeball style={[styles.pokeBall]} />
        <View style={[styles.view, style]}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: 'white',
  },
  pokeBall: {
    width: 400,
    height: 400,
    position: 'absolute',
    right: -250,
    top: -120
  },
  view: {
    paddingHorizontal: 20
  },
  headerText: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 32,
    fontWeight: 'bold'
  },
});