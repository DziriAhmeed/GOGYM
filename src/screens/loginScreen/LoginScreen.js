import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./loginScreenStyles";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../../../config";
import { GoogleAuthProvider } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userslice/UserSlice";

const LoginScreen = ({ navigation }) => {
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };
  const handleForget = () => {
    navigation.navigate("Forget Password");
  };
  const handleLogin = async () => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user");
        await dispatch(
          setUser({
            email: user.email,
            token: user.stsTokenManager.accessToken,
          })
        );
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  // const handlegooglelog = async () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       dispatch(
  //         setUser({
  //           email: user.email,
  //           token: user.stsTokenManager.accessToken,
  //         })
  //       );
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // };
  const [hidePass, setHidePass] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image
          style={{ flex: 1, resizeMode: "contain" }}
          source={require("../../../assets/login.png")}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholderTextColor={"#CCC7CD"}
          style={styles.input}
        />
        <View style={styles.input}>
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={hidePass ? true : false}
            placeholderTextColor={"#CCC7CD"}
            style={{ flex: 1, color: "#CCC7CD" }}
          />
          <Ionicons
            name={hidePass ? "ios-eye-off-outline" : "ios-eye-outline"}
            size={20}
            onPress={() => setHidePass(!hidePass)}
            style={{ paddingTop: 4, color: "#CCC7CD" }}
          />
        </View>
        <View style={styles.forgetpass}>
          <TouchableOpacity onPress={handleForget}>
            <Text style={{ color: "#F86262" }}>Forget password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logbutton} onPress={handleLogin}>
          {isLoading ? (
            <View style={{ flex: 1, alignItems: "center" }}>
              <ActivityIndicator size={"small"} color={"white"} />
            </View>
          ) : (
            <Text style={{ color: "#FFFFFF" }}>Login</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.googlebutton}>
          <Image
            source={require("../../../assets/google.png")}
            style={{ margin: 10 }}
          />
          <Text style={{ color: "#808B9E" }}>Login with Google</Text>
        </TouchableOpacity>
        <View style={styles.newaccount}>
          <Text style={{ color: "#CCC7CD" }}>You don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={{ color: "#F86262" }}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;
