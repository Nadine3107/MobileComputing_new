import React from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Textfeld = () => {
    const [text, onChangeText] = React.useState("Text");
    return (
          <SafeAreaView>
              <TextInput
                  style = {styles.input}
                  onChangeText={onChangeText}
                  placeholder="Schreibe einen Beitrag..."
                  />
          </SafeAreaView>
    ) 
  }

  const styles = StyleSheet.create({
      input:{
          height: 120,
          marginHorizontal: 20,
          borderWidth: 2,
          padding: 10,
          borderRadius: 10
      },
  });
  export default Textfeld;