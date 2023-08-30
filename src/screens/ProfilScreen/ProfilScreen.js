import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { getAuth } from "firebase/auth";
import styles from "./profilScreenStyles";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userslice/UserSlice";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const ProfilScreen = () => {
  const dispatch = useDispatch();
  const onSignoutPress = () => {
    getAuth()
      .signOut()
      .then(() => dispatch(logout()));
  };
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <View style={styles.container}>
      {/* the user photo name and email */}
      <View style={styles.firstsection}>
        <Image
          style={{ marginRight: 15 }}
          source={require("../../../assets/user.png")}
        />
        <View>
          <Text style={styles.text}>{user.name}</Text>
          <Text style={styles.text}>{user.email}</Text>
        </View>
      </View>

      {/* User action */}
      <Text style={{ color: "#B9B1BC", fontSize: 20, marginVertical: 10 }}>
        Privacy
      </Text>
      <View style={{ backgroundColor: "#252028", borderRadius: 10 }}>
        {/* Security */}
        <TouchableOpacity style={styles.touchable}>
          <View style={styles.touchableIn}>
            <Ionicons
              name="md-lock-closed-outline"
              size={24}
              color="#B9B1BC"
              style={styles.icon}
            />
            <Text style={styles.text}>Security</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={24} color="#B9B1BC" />
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#B9B1BC",
            marginHorizontal: 10,
            opacity: 0.4,
          }}
        ></View>
        {/* Privacy policy */}
        <TouchableOpacity style={styles.touchable}>
          <View style={styles.touchableIn}>
            <Ionicons
              name="key-outline"
              size={24}
              color="#B9B1BC"
              style={styles.icon}
            />
            <Text style={styles.text}>Privacy Policy</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={24} color="#B9B1BC" />
        </TouchableOpacity>
      </View>
      <Text style={{ color: "#B9B1BC", fontSize: 20, marginVertical: 10 }}>
        Settings
      </Text>
      <View style={{ backgroundColor: "#252028", borderRadius: 10 }}>
        {/* Edit Account */}
        <TouchableOpacity style={styles.touchable}>
          <View style={styles.touchableIn}>
            <Feather
              name="edit"
              size={24}
              color="#B9B1BC"
              style={styles.icon}
            />
            <Text style={styles.text}>Edit Account</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={24} color="#B9B1BC" />
        </TouchableOpacity>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#B9B1BC",
            marginHorizontal: 10,
            opacity: 0.4,
          }}
        ></View>

        {/*Change Password */}
        <TouchableOpacity style={styles.touchable}>
          <View style={styles.touchableIn}>
            <Ionicons
              name="md-lock-closed-outline"
              size={24}
              color="#B9B1BC"
              style={styles.icon}
            />
            <Text style={styles.text}>Change Password</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={24} color="#B9B1BC" />
        </TouchableOpacity>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#B9B1BC",
            marginHorizontal: 10,
            opacity: 0.4,
          }}
        ></View>

        {/* Help */}
        <TouchableOpacity style={styles.touchable}>
          <View style={styles.touchableIn}>
            <Ionicons
              name="help"
              size={24}
              color="#B9B1BC"
              style={styles.icon}
            />
            <Text style={styles.text}>Help</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={24} color="#B9B1BC" />
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#B9B1BC",
            marginHorizontal: 10,
            opacity: 0.4,
          }}
        ></View>
        {/* Log out end user session */}
        <TouchableOpacity style={styles.touchable} onPress={onSignoutPress}>
          <View style={styles.touchableIn}>
            <MaterialIcons
              name="logout"
              size={24}
              color="#f04444"
              style={styles.icon}
            />
            <Text style={{ color: "#f04444", fontSize: 17 }}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfilScreen;
