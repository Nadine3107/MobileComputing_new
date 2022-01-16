import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LinkButton from "../../Components/LinkButton";

const Home = () => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <View style={{ marginVertical: 20 }}>
          <LinkButton
            title={"Beitrag erstellen"}
            type={"needHelp"}
            link={"CreateCard"}
          />
          <LinkButton title={"Pinnwand"} type={"primary"} link={"Pinnwand"} />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
