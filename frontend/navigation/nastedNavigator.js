import React from "react";
import { connect } from "react-redux";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeStackNav,
  ImpressumStackNav,
  PinnwandStackNav,
  ProfileStackNav,
} from "./stacknavigator";
import Anmelden from "../Screens/Anmelden/Anmelden";
import Registrieren from "../Screens/Registrieren/Registrieren";
import { COLORS } from "../Styles/Colors";
import CameraScreen from "../Screens/Camera/Camera";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const NastedNavigator = ({ loginState, userData }) => {
  return (
    <NavigationContainer>
      {loginState ? (
        <Tab.Navigator
          initialRouteName={"Home"}
          activeColor={COLORS.primaryColor}
          inactiveColor="#95a5a6"
          barStyle={{ backgroundColor: COLORS.bgColor }}
        >
          <Tab.Screen
            name="Home"
            children={() => <HomeStackNav />}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profil"
            children={() => <ProfileStackNav />}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Pinnwand"
            children={() => <PinnwandStackNav />}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cards" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Impressum"
            children={() => <ImpressumStackNav />}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="file-document"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Anmelden} />
          <Stack.Screen name="SignUp" component={Registrieren} />
          <Stack.Screen name="Camera" component={CameraScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    loginState: state.loginState,
    userData: state.userData,
  };
};

export default connect(mapStateToProps, null)(NastedNavigator);
