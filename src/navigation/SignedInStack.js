import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
const HomeStack = createNativeStackNavigator();

function SignedInStack (){
    return(<HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen}/>
    </HomeStack.Navigator>)
}
export default SignedInStack