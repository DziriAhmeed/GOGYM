import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { getAuth } from "firebase/auth";
import styles from "./profilScreenStyles";

const ProfilScreen = () => {
  const onSignoutPress = () => {
    getAuth().signOut().then(console.log("signed out"));
  };
  return (
    <View style={styles.container} >
      <Text>Welcome to profil !!</Text>
      <TouchableOpacity onPress={onSignoutPress}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ProfilScreen;