import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./signUpStyles";
const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Echri</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          onChangeText={(text) => setPhoneNumber(text)}
          value={phonenumber}
        />
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          onChangeText={(text) => setConfirmPass(text)}
          value={confirmpass}
        />
        <TouchableOpacity style={styles.createbutton}>
          <Text style={{ color: "#FFFFFF" }}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goBack}>
          <Text style={{ color: "#0094FF" }}>go back to login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUpScreen;
