import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfilScreen from "../screens/ProfilScreen/ProfilScreen";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen}/>
    </Tab.Navigator>
  );
}
export default MyTabs