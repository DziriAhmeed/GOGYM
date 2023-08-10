import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, ImageBackground,TextInput,Button } from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen/ForgetPasswordScreen';
import Root from './src/navigation/Root';

export default function App() {
  return (
    <Root/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
