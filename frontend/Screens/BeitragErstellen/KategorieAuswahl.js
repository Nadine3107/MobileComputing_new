import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper';

// data
import KategorieData from '../../Data/KategorieData';

const KategorieAuswahl = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 30 }}>
      {KategorieData.data.map((data, i) => (
        <Chip key={i} style={{ marginRight: 10 }}><Text>{data.name}</Text></Chip>
      ))}
    </ScrollView>
  )
}

export default KategorieAuswahl;