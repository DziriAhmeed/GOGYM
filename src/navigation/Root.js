import * as React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthNavigationStack";

import { useState } from "react";
import { useEffect } from "react";
import firebaseConfig from "../../config";
import { initializeApp } from "firebase/app";

import MyTabs from "./SignedInTabs";
import { useSelector } from "react-redux";
export default function Root() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const user = useSelector((state) => state.user);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  useEffect(() => {}, [user.token]);
  console.log(user);
  if (!user.token) {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  } else return <NavigationContainer>{<MyTabs />}</NavigationContainer>;
}
