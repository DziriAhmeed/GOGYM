import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./homeScreenStyles";
import { getAuth } from "firebase/auth";

const HomeScreen = () => {
  const onSignoutPress = () => {
    getAuth().signOut().then(console.log("signed out"));
  };
  return (
    <View style={styles.container}>
      <Text>Welcome back !!</Text>
      <TouchableOpacity onPress={onSignoutPress}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
