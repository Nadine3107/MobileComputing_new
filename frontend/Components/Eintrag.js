import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight, TouchableNativeFeedback } from "react-native-gesture-handler";
import { COLORS } from "../Styles/Colors";

// Einträge für Hilfe suchen und Hilfe anbieten 
const Eintrag = ({ type, description, category, ...props }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  // bei drücken auf einen Beitrag wird zu den Details des Beitrags navigiert
  // Anzeige der Beiträge auf der Pinnwand
  return (
    <>
      <TouchableNativeFeedback onPress={() => navigation.navigate('Details', { type: type, description: description, category: category })}>
        <View style={[styles.Card, { borderLeftColor: type === "Hilfe suchen" ? COLORS.needHelpColor : COLORS.offerHelpColor, borderLeftWidth: 5 }]}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[styles.card_type, { color: type === "Hilfe suchen" ? COLORS.needHelpColor : COLORS.offerHelpColor }]}>{type}</Text>
            <Text style={styles.card_date}>22.12.2021</Text>
          </View>
          <Text style={styles.card_category}>{category}</Text>
          <Text>{visible ? description : description.slice(0, 75) + '...'}</Text>
        </View>
      </TouchableNativeFeedback>
    </>
  )
}

// Design für die einzelnen Bestandteile eines Beitrags
const styles = StyleSheet.create({
  Card: {
    backgroundColor: '#ffffff',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5
  },
  card_type: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  card_category: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card_date: {
    fontSize: 12,
  }
})

export default Eintrag;