import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

export default function PokeAbout({ details }) {
  return (
    <Layout style={styles.tabContainer}>
      <View>
        <View style={styles.tableRow}>
          <Text category='s1' appearance='hint' style={[styles.tableCell, { flexBasis: '35%' }]}>Height</Text>
          <Text category='s1' style={styles.tableCell}>{details.height * 10} cm (~{Math.round(details.weight * 0.3281)} ft)</Text>
        </View>
        <View style={styles.tableRow}>
          <Text category='s1' appearance='hint' style={[styles.tableCell, { flexBasis: '35%' }]}>Weight</Text>
          <Text category='s1' style={styles.tableCell}>{details.weight / 10} kg (~{Math.round(details.weight * 0.2205)} lbs)</Text>
        </View>
        <View style={styles.tableRow}>
          <Text category='s1' appearance='hint' style={[styles.tableCell, { flexBasis: '35%' }]}>Abilities</Text>
          <View style={[styles.tableCell]}>
            <FlatList
              contentContainerStyle={styles.tableCellList}
              data={details.abilities}
              keyExtractor={(item) => item.slot.toString() }
              renderItem={({ item, index }) => {
                const text = index < (details.abilities.length - 1) ? `${item.ability.name}, ` : item.ability.name;

                return <Text category='s1' style={{ textTransform: 'capitalize' }}>{text}</Text>
              }}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    marginBottom: 30,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  tableCell: {
    flexBasis: '50%',
  },
  tableCellList: {
    flexDirection: "row"
  }
});