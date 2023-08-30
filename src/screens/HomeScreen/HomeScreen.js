import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./homeScreenStyles";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const onSignoutPress = () => {
    getAuth().signOut().then(console.log("signed out"));
  };
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      {/* Home Header */}
      <View>
        <View>
          <Text>Welcome back !!</Text>
          <Text>{user.email}</Text>
        </View>
        <Image
          style={{ marginRight: 15 }}
          source={require("../../../assets/user.png")}
        />
      </View>

      <TouchableOpacity onPress={onSignoutPress}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
