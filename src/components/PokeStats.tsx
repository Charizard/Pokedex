import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

export default function PokeStats({ details }) {
  return (
    <Layout style={styles.tabContainer}>
      <FlatList
        data={details.stats}
        keyExtractor={(item) => item.stat.name }
        renderItem={({ item }) => {
          const statPercent = Math.round((item.base_stat / 255) * 100);
          const fillColor = statPercent > 35 ? 'green' : 'red';
          return (
            <View style={styles.tableRow}>
              <Text category='s1' appearance='hint' style={[styles.tableCell, { flexBasis: '35%' }]}>{item.stat.name}</Text>
              <Text category='s1' style={styles.tableCell}>{item.base_stat}</Text>
              <View style={ { width: '100%', marginLeft: 10 } }>
                <View style={[styles.statBar, { width: `${statPercent}%`, borderColor: fillColor }]}></View>
                <View style={styles.statBarAvailable}></View>
              </View>
            </View>
          );
        }}
      />
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
    flexBasis: '10%',
    textTransform: "capitalize"
  },
  tableCellList: {
    flexDirection: "row"
  },
  statBar: {
    zIndex: 1,
    borderWidth: 1,
    borderColor: 'red'
  },
  statBarAvailable: {
    position: 'absolute',
    width: '100%',
    borderWidth: 1,
    borderColor: '#e1e1e1'
  }
});