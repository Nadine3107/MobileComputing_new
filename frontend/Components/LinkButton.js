import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Pressable, StyleSheet, Text} from 'react-native';
import { COLORS } from '../Styles/Colors';

// Button Komponente mit verschiedenen Designs
const LinkButton = ({ title, onPress, type, link, ...props }) => {
  const navigation = useNavigation();

  // if-Anweisung für Unterscheidung verschiedener Buttons
  const setButtonColor = () => {
    // Button für Hilfe suchen
    if(type == 'needHelp'){
      return COLORS.needHelpColor
    // Button für Hilfe anbieten
    }else if(type == 'offerHelp'){
      return COLORS.offerHelpColor
    }
    // Button im Hauptdesign
    else if(type == 'primary'){
      return COLORS.primaryColor
    }
    // Button in schwarz
    else{
      return COLORS.blackColor
    }
  }

  // beim drücken auf den Button wird auf die entsprechende Seite (als link übergeben) navigiert
  return (
    <Pressable style={[styles.button, {borderColor: setButtonColor()}]} onPress={() => navigation.navigate(`${link}`)} >
      <Text style={[styles.buttonText, {color: setButtonColor()}]}>{title}</Text>
    </Pressable>
  )
}

// festgelegtes Design für Buttons
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderRadius: 5,
    borderWidth: 2,
    marginBottom: 10,
    marginHorizontal: 20
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.primaryColor,
    fontWeight: 'bold'
  }
})

export default LinkButton;