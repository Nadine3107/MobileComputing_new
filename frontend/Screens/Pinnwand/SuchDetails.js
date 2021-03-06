import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// styles
import globalStyle from '../../Styles/GlobalStyles';
import { TYPO } from '../../Styles/Typo';


const SuchDetails = ({ route, navigation }) => {
  const { type, description, category } = route.params;
  return (
    <>
      <ScrollView style={globalStyle.container}>
        <Text>{type}</Text>
        <Text>{description}</Text>
        <Text>{category}</Text>
      </ScrollView>
    </>
  )
}

export default SuchDetails;