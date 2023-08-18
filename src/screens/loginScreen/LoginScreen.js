import React from "react";
import { useState } from "react";
import { View, Text,Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./loginScreenStyles";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../../../config";
import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

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
  const [hidePass, setHidePass] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
      <Image style={{flex:1,resizeMode:'contain'}}  source={require('../../../assets/login.png')}/>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
        />
        <View style={styles.input}>
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={hidePass ? true : false}
            style={{flex:1}}
          />
          <Ionicons
            name={hidePass ? "ios-eye-off-outline" : "ios-eye-outline"}
            size={20}
            onPress={() => setHidePass(!hidePass)}
            style={{paddingTop:4}}
          />
        </View>
        <View style={styles.forgetpass}>
          <TouchableOpacity onPress={handleForget}>
            <Text style={{ color: "#0094FF" }}>Forget password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logbutton} onPress={handleLogin}>
          <Text style={{ color: "#FFFFFF" }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googlebutton} >
        <Image source={require('../../../assets/google.png')} style={{margin:10}}/>
          <Text style={{ color: "#808B9E" }}>Login with Google</Text>
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
