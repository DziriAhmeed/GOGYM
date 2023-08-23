import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Provider } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";

import Root from "./src/navigation/Root";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}><Root /></Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
