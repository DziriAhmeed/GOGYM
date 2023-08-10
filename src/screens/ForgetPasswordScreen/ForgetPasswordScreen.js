import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./forgetPasswordStyles";

const ForgetPasswordScreen = ({ navigation }) => {
  const handlePressMe = () => {
    navigation.navigate("Otp")
  };
  const goBack = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <View style={styles.choices}>
        <Text style={styles.title}>
          Select which contact details should we use to reset your password
        </Text>
      </View>
      <View style={styles.choices}>
        <TouchableOpacity style={styles.choicecontainer} onPress={handlePressMe}>
          <View style={styles.icon}>
            <Image source={require("../../../assets/SMS.png")} />
          </View>
          <View>
            <Text>via SMS</Text>
            <Text>+216 4*****85</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.choicecontainer} onPress={handlePressMe}>
          <View style={styles.icon}>
            <Image source={require("../../../assets/letter.png")} />
          </View>
          <View>
            <Text>via E-amil</Text>
            <Text>dz***@gmail.com</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goBack}>
        <Text>Back to login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ForgetPasswordScreen;
