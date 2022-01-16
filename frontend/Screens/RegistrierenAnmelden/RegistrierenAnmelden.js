import React from 'react';
import {View} from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import Button from '../../Components/Button';

const RegistrierenAnmelden = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginVertical: 300}}>
          <Button title={'Anmelden'} type={'primary'}link={'Anmelden'}/>
          <Button title={'Registrieren'} type={'primary'}link={'Registrieren'}/>
        </View>
      </ScrollView>
    </>
  )
}

export default RegistrierenAnmelden;