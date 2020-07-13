import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { SharedElement } from 'react-navigation-shared-element';

export default function PokeTypePill({ type, pokemonId, pillContainerStyles }) {
  return (
    <SharedElement id={`item.${pokemonId}.type.${type}`}>
      <View style={[styles.typeTag, pillContainerStyles]}>
        <Text category="c1" style={styles.typeText}>{type}</Text>
      </View>
    </SharedElement>
  );
};

const styles = StyleSheet.create({
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
});