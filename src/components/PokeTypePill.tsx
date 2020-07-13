import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';

export default function PokeTypePill({ type }) {
  return (
    <View style={styles.typeTag}>
      <Text category="c1" style={styles.typeText}>{type}</Text>
    </View>
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