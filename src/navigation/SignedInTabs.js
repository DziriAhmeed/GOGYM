import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfilScreen from "../screens/ProfilScreen/ProfilScreen";
import LibraryScreen from "../screens/LibraryScreen/LibraryScreen";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/header/Header";
import BlogsScreen from "../screens/BlogsScreen/BlogsScreen";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#f04444",
        tabBarInactiveTintColor: "#B9B1BC",
        tabBarStyle: {
          marginTop: 0,
          borderTopWidth: 0,
          backgroundColor: "#252028",
          borderColor: "#252028",
          borderRadius: 20,
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          tabBarLabel: "Library",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell-outline" size={size} color={color} />
          ),
          headerTitle: () => <Header name="Library" />,
          headerStyle: {
            backgroundColor: "#191418",
            height: 60,
          },
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="Blogs"
        component={BlogsScreen}
        options={{
          tabBarLabel: "Blogs",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" size={size} color={color} />
          ),
          headerTitle: () => <Header name="Blogs" />,
          headerStyle: {
            backgroundColor: "#191418",
            height: 60,
          },
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          headerTitle: () => <Header name="Profil" />,
          headerStyle: {
            backgroundColor: "#191418",
            height: 60,
          },
          headerShadowVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
