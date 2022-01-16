import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Chip } from "react-native-paper";

const KategorieFilter = ({ categoryData }) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ marginBottom: 30 }}
    >
      {categoryData.map((data) => (
        <Chip key={data._id} style={{ marginRight: 10 }}>
          <Text>{data.name}</Text>
        </Chip>
      ))}
    </ScrollView>
  );
};

export default KategorieFilter;
