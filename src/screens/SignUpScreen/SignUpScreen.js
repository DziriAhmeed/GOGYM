import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./signUpStyles";
const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [error, setError] = useState();

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
          // ...
          navigation.navigate("Otp");
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

  return (
      <KeyboardAwareScrollView>
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
            <TouchableOpacity
              style={styles.createbutton}
              onPress={handleSignUp}
            >
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
