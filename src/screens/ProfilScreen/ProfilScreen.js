import React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";

import { getAuth } from "firebase/auth";
import styles from "./profilScreenStyles";
import { useSelector} from "react-redux";

const ProfilScreen = () => {
  const onSignoutPress = () => {
    getAuth().signOut().then(console.log("signed out"));
  };
  const user = useSelector((state)=>state.user)
  return (
    <View style={styles.container} >
      <Text>Welcome to profil !!</Text>
{/* the user photo name and email */}
      <View style={styles.firstsection} >
        <Image  source={require('../../../assets/user.png')}/>
        <View>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
        </View>
      </View>

 {/* User action */}

      {/* Edit user info */}
      <TouchableOpacity>
        <Text>
          Edit profil
        </Text>
      </TouchableOpacity>

      {/* See user History */}
      <TouchableOpacity>
        <Text>
          History
        </Text>
      </TouchableOpacity>

      {/* Edit user info */}
      <TouchableOpacity>
        <Text>
          Help
        </Text>
      </TouchableOpacity>

      {/* Log out end user session */}
      <TouchableOpacity onPress={onSignoutPress}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ProfilScreen;