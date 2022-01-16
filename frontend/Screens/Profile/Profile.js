import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import LinkButton from "../../Components/LinkButton.js";

// styles
//import globalStyle from '../../styles/globalStyles';

const Profile = ({ userData }) => {
  return (
    <>
      <ScrollView style={[{ paddingBottom: 20 }]}>
        <Text>{userData.firstName}</Text>
        <Text>{userData.lastName}</Text>
        <Text>{userData.email}</Text>
        <LinkButton title={"Foto hochladen"} type={"primary"} link={"Camera"} />
      </ScrollView>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(mapStateToProps, null)(Profile);
