import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthNavigationStack";

export default function Root() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
