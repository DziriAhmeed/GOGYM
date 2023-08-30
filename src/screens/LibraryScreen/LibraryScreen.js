import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./libraryScreenStyel.js";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const LibraryScreen = () => {
  const onSignoutPress = () => {
    getAuth().signOut().then(console.log("signed out"));
  };
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome back !!</Text>
      <Text style={styles.text}>{user.email}</Text>
    </View>
  );
};
export default LibraryScreen;
