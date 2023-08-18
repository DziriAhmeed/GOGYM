import * as React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthNavigationStack";


import { useState } from "react";
import { useEffect } from "react";
import firebaseConfig from "../../config";
import { initializeApp } from "firebase/app";
import MyTabs from "./SignedInTabs";
export default function Root() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        setUser(undefined);
        // User is signed out
        // ...
      }
    });
  }, [user]);

  if (!user) {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  }else

  return <NavigationContainer>{<MyTabs />}</NavigationContainer>;
}
