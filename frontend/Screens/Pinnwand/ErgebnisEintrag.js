import React from 'react';
import { View } from 'react-native';
import Eintrag from '../../Components/Eintrag';

// data
import EintragData from '../../Data/EintragData';

const ErgebnisEintrag = () => {
  return (
    <View style={{ marginBottom: 50 }}>
      {EintragData.data.map((data, i) => (
        <Eintrag key={i} type={data.type} description={data.description} category={data.category} />
      ))}
    </View>
  )
}

export default ErgebnisEintrag;