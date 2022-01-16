import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// styles
import globalStyle from "../../Styles/GlobalStyles";
import { TYPO } from "../../Styles/Typo";

// components
import KategorieFilter from "./KategorieFilter";
import ErgebnisEintrag from "./ErgebnisEintrag";
import TypFilter from "./TypFilter";
import axios from "axios";
import Eintrag from "../../Components/Eintrag";

const Pinnwand = () => {
  const [cardsData, setCardsData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [cardsDataLoadet, setCardsDataLoadet] = useState(false);
  const [categoriesDataLoadet, setCategoriesDataLoadet] = useState(false);

  useEffect(async () => {
    const resultCards = await axios("http://192.168.2.115:3000/api/v1/cards");
    const resultCategories = await axios(
      "http://192.168.2.115:3000/api/v1/categories"
    );

    setCardsData(resultCards.data);
    setCategoryData(resultCategories.data);
    setCardsDataLoadet(true);
    setCategoriesDataLoadet(true);
  }, []);

  return (
    <>
      <ScrollView style={globalStyle.container}>
        <TypFilter />
        <KategorieFilter categoryData={categoryData} />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Text style={TYPO.sub_title}>Ergebnisse</Text>
        </View>

        {cardsData.map((data) => (
          <Eintrag
            key={data._id}
            type={data.cardType}
            description={data.description}
            category={data.category}
          />
        ))}

        {/* <ErgebnisEintrag /> */}
      </ScrollView>
    </>
  );
};

export default Pinnwand;
