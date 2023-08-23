import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./homeScreenStyles";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const onSignoutPress = () => {
    getAuth().signOut().then(console.log("signed out"));
  };
  const user = useSelector((state)=>state.user)
  console.log(user)
  return (
    <View style={styles.container}>
      <Text>Welcome back !!</Text>
      <Text>{user.email}</Text>
      <TouchableOpacity onPress={onSignoutPress}>
        <Text>Sign Out</Text>
      </TouchableOpacity>

    </View>
  );
};
export default HomeScreen;
