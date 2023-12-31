import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./signUpStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userslice/UserSlice";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const goBack = () => navigation.goBack();
  const handleSignUp = async () => {
    try {
      if (password !== confirmpass) {
        setError("Passwords do not match");
        return;
      }

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(setUser({ name, email, phonenumber }));
          // ...
          navigation.navigate("Login");
          alert("your account has been created");
        }
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case "auth/invalid-email":
          alert("The email is invalid");
          break;
        case "auth/email-already-in-use":
          alert("The email is already in use");
          break;
        case "auth/weak-password":
          alert("The password is too weak");
        default:
          alert(errorMessage);
          break;
      }
    }
  };
  const [hidePass, setHidePass] = useState(true);
  const [hidePass1, setHidePass1] = useState(true);
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Image
            style={{ height: 150, width: 150 }}
            source={require("../../../assets/signup.png")}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholderTextColor={"#CCC7CD"}
          />
          <TextInput
            placeholder="Phone Number"
            style={styles.input}
            onChangeText={(text) => setPhoneNumber(text)}
            value={phonenumber}
            placeholderTextColor={"#CCC7CD"}
          />
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholderTextColor={"#CCC7CD"}
          />
          <View style={styles.input}>
            <TextInput
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={hidePass ? true : false}
              style={{ flex: 1, color: "#CCC7CD" }}
              placeholderTextColor={"#CCC7CD"}
            />
            <Ionicons
              name={hidePass ? "ios-eye-off-outline" : "ios-eye-outline"}
              size={20}
              onPress={() => setHidePass(!hidePass)}
              style={{ paddingTop: 4, color: "#CCC7CD" }}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Confirm Password"
              onChangeText={(text) => setConfirmPass(text)}
              value={confirmpass}
              secureTextEntry={hidePass1 ? true : false}
              style={{ flex: 1, color: "#CCC7CD" }}
              placeholderTextColor={"#CCC7CD"}
            />
            <Ionicons
              name={hidePass1 ? "ios-eye-off-outline" : "ios-eye-outline"}
              size={20}
              onPress={() => setHidePass1(!hidePass1)}
              style={{ paddingTop: 4, color: "#CCC7CD" }}
            />
          </View>
          <TouchableOpacity style={styles.createbutton} onPress={handleSignUp}>
            <Text style={{ color: "#FFFFFF" }}>Create Account</Text>
          </TouchableOpacity>
          {error !== "" && <Text style={styles.errorText}>{error}</Text>}
          <TouchableOpacity onPress={goBack}>
            <Text style={{ color: "#0094FF" }}>go back to login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default SignUpScreen;
