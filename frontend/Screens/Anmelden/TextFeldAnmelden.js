import React from 'react';
import {StyleSheet, View, TextInput } from 'react-native';

import { COLORS } from '../../Styles/Colors';

// Textfelder für E-Mail Adresse, Passwort
const TextfeldAnmelden = () => {
    const [text, onChangeText] = React.useState("Text");
    return (
          <View>
              <TextInput style = {styles.input} placeholder="E-Mail Adresse"/>
              <TextInput style = {styles.input} placeholder="Passwort"/>
          </View>
    ) 
  }

  // Design für Textfelder
  const styles = StyleSheet.create({
      input:{
          height: 50,
          marginVertical: 10,
          marginHorizontal: 20,
          borderWidth: 2,
          padding: 10,
          borderColor: COLORS.blackColor,
          borderRadius: 10
      },
  });
  export default TextfeldAnmelden;