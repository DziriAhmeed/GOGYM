import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen/ForgetPasswordScreen";
import OtpScreen from "../screens/OtpScreen/OtpScreen";
import Header from "../components/header/Header";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: () => <Header name="Login" />,
          headerStyle: {
            backgroundColor: "#191418",
            height: 120,
          },
        }}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Forget Password" component={ForgetPasswordScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
    </Stack.Navigator>
  );
}
export default AuthStack;
