import React from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../Components/LinkButton';
import { COLORS } from '../../Styles/Colors';

const TextfeldRegistrieren = () => {
    const [text, onChangeText] = React.useState("Text");
    return (
          <View>
              <TextInput style = {styles.input} placeholder="Vorname"/>
              <TextInput style = {styles.input} placeholder="Nachname"/>
              <TextInput style = {styles.input} placeholder="Straße"/>
              <TextInput style = {styles.input} placeholder="Stadt"/>
              <TextInput style = {styles.input} placeholder="E-Mail Adresse"/>
              <TextInput style = {styles.input} placeholder="Passwort"/>
              <TextInput style = {styles.input} placeholder="Passwort bestätigen"/>
          </View>
    ) 
  }

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
  export default TextfeldRegistrieren;