import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import der benötigten Screens
import Home from "../Screens/Home/Home";
import Impressum from "../Screens/Impressum/Impressum";
import Profile from "../Screens/Profile/Profile";
import Pinnwand from "../Screens/Pinnwand/Pinnwand";
import SuchDetails from "../Screens/Pinnwand/SuchDetails";
import BeitragErstellen from "../Screens/BeitragErstellen/BeitragErstellen";
import CameraScreen from "../Screens/Camera/Camera";

// Anzeige des entsprechenden Screen-Namens oberhalb der Seite
const HomeStack = createStackNavigator();
const HomeStackNav = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="CreateCard" component={BeitragErstellen} />
  </HomeStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackNav = ({ navigation }) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profil" component={Profile} />
    <ProfileStack.Screen name="Camera" component={CameraScreen} />
  </ProfileStack.Navigator>
);

const PinnwandStack = createStackNavigator();
const PinnwandStackNav = ({ navigation }) => (
  <PinnwandStack.Navigator>
    <PinnwandStack.Screen name="Pinnwand" component={Pinnwand} />
    <PinnwandStack.Screen name="Details" component={SuchDetails} />
  </PinnwandStack.Navigator>
);

const ImpressumStack = createStackNavigator();
const ImpressumStackNav = ({ navigation }) => (
  <ImpressumStack.Navigator>
    <ImpressumStack.Screen name="Impressum" component={Impressum} />
  </ImpressumStack.Navigator>
);

export { HomeStackNav, PinnwandStackNav, ImpressumStackNav, ProfileStackNav };
