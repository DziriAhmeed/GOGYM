import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./loginScreenStyles";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../../../config";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };
  const handleForget = () => {
    navigation.navigate("Forget Password");
  };
  const handleLogin = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wlecome to Echri</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.forgetpass}>
          <TouchableOpacity onPress={handleForget}>
            <Text style={{ color: "#0094FF" }}>Forget password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logbutton} onPress={handleLogin}>
          <Text style={{ color: "#FFFFFF" }}>Login</Text>
        </TouchableOpacity>
        <View style={styles.newaccount}>
          <Text>You don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={{ color: "#0094FF" }}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;
