import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Badge, Chip } from 'react-native-paper';
import EintragData from '../../Data/EintragData';
import { COLORS } from '../../Styles/Colors';

const helpData = [
  {
    name: 'Hilfe anbieten'
  },
  {
    name: 'Hilfe suchen'
  }
]

const TypFilter = () => {
  const [countHelpOffers, setCountHelpOffers] = useState();
  const [countNeedHelp, setCountNeedHelp] = useState();

  useEffect(() => {
    let counterHelpOffers = 0;
    let counterNeedHelp = 0;

    EintragData.data.map((data) => {
      if (data.type === "Hilfe suchen") {
        counterNeedHelp++;
      } else {
        counterHelpOffers++
      }
    })

    setCountHelpOffers(counterHelpOffers);
    setCountNeedHelp(counterNeedHelp)
  })

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 10, marginBottom: 10 }}>
      {helpData.map((data, i) => (
        <View key={i} style={{ position: 'relative', marginRight: 20 }}>
          <Chip>
            <Text>{data.name}</Text>
          </Chip>
          <Badge style={{ position: 'absolute', top: 0, right: -10, backgroundColor: data.name === "Hilfe suchen" ? COLORS.needHelpColor : COLORS.offerHelpColor}}>
            {data.name === "Hilfe suchen" ? countNeedHelp : countHelpOffers}
          </Badge>
        </View>
      ))}
    </View>
  )
}

export default TypFilter;