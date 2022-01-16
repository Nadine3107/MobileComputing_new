import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import globalStyle from "../../Styles/GlobalStyles";
import { COLORS } from "../../Styles/Colors";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import { Snackbar } from "react-native-paper";

// Seite um einen Beitrag zu erstellen (Hilfe anbieten oder Hilfe suchen)
// Auswahl einer Kategorie für die Hilfe gesucht oder Hilfe angeboten wird
// Schreiben eines Beitrags im Textfeld
// Absenden des Beitrags über den Button
const BeitragErstellen = () => {
  const navigation = useNavigation();
  const [selectCardType, setSelectedCardType] = useState();
  const [selectCategory, setSelectedCategry] = useState();
  const [descriptionText, setDescriptionText] = useState("");
  const [visible, setVisible] = useState(false);
  const [snackbarText, setSnackBarText] = useState("");
  const [categoryData, setCategoryData] = useState([]);

  useEffect(async () => {
    const resultCategories = await axios(
      "http://192.168.2.115:3000/api/v1/categories"
    );

    setCategoryData(resultCategories.data);
  }, []);

  const onDismissSnackBar = () => setVisible(false);

  const handleCreateCard = async (event) => {
    if (
      selectCardType == undefined ||
      selectCategory == undefined ||
      descriptionText == undefined
    ) {
      setVisible(true);
      setSnackBarText("bitte überprüfe deine Eingabe nochmal");
    } else {
      try {
        const response = await axios.post(
          "http://192.168.2.115:3000/api/v1/cards",
          {
            description: descriptionText,
            cardType: selectCardType,
            category: selectCategory,
          }
        );
      } catch (error) {
        console.log(error);
      }

      navigation.navigate("Pinnwand");
    }
  };

  return (
    <>
      <ScrollView style={globalStyle.container}>
        <View>
          {/* TODO: CardType --> dropdown */}
          <Picker
            selectedValue={selectCardType}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCardType(itemValue)
            }
          >
            <Picker.Item label="Type wählen" value="" />
            <Picker.Item label="Hilfe suchen" value="Hilfsgesuche" />
            <Picker.Item label="Hilfe anbieten" value="Hilfsangebot" />
          </Picker>
          {/* TODO: categorien --> dropdown */}
          <Picker
            selectedValue={selectCategory}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCategry(itemValue)
            }
          >
            <Picker.Item label="Kategorie wählen" value="" />
            {categoryData.map((data) => (
              <Picker.Item key={data._id} label={data.name} value={data.name} />
            ))}
          </Picker>
          {/* TODO: description --> textfield */}
          <TextInput
            multiline={true}
            numberOfLines={10}
            onChangeText={setDescriptionText}
            placeholder="bitte geben Sie hier eine Beschreibung ein"
            value={descriptionText}
          />
          <Button title="absenden" onPress={() => handleCreateCard()} />
        </View>
        <View style={{ marginTop: 100 }}>
          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            duration={2000}
            style={{ backgroundColor: COLORS.needHelpColor }}
          >
            {snackbarText}
          </Snackbar>
        </View>
      </ScrollView>
    </>
  );
};

// Design für den Button "absenden"
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: COLORS.primaryColor,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.primaryColor,
    fontWeight: "bold",
  },
});

export default BeitragErstellen;
