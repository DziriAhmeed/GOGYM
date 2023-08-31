import React from "react";
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./homeScreenStyles";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import { Pedometer } from "expo-sensors";
import "react-native-gesture-handler";
import CircularProgress from "react-native-circular-progress-indicator";
import { Ionicons } from "@expo/vector-icons";
import EXERCICES from "../../assets/exercises/exercises";

const HomeScreen = () => {
  const [PedometerAvailability, setPedometerAvailability] = useState("");
  const [stepCount, updateStepCount] = useState(0);
  useEffect(() => {
    console.log(
      EXERCICES.filter((item, index) => item.primaryMuscles[0] === "abdominals")
    );
    subscribe();
  }),
    (subscribe = () => {
      const subscription = Pedometer.watchStepCount((result) => {
        updateStepCount(result.steps);
      });

      Pedometer.isAvailableAsync().then(
        (result) => {
          setPedometerAvailability(String(result));
        },
        (error) => {
          setPedometerAvailability(String(error));
        }
      );
    });

  const onSignoutPress = () => {
    getAuth().signOut().then(console.log("signed out"));
  };
  const user = useSelector((state) => state.user);
  var distKM = stepCount / 1300;
  var dist = distKM.toFixed(3);
  var kcal = dist * 0.06;
  var KcalBurnt = kcal.toFixed(2);
  return (
    <View style={styles.container}>
      {/* Home Header */}

      <View style={styles.firstsection}>
        <View>
          <Text style={styles.text}>{user.name}</Text>
          <Text style={styles.text}>{user.email}</Text>
        </View>
        <Image
          style={{ marginLeft: 15, alignItems: "flex-end" }}
          source={require("../../../assets/user.png")}
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#B9B1BC",
          marginHorizontal: 10,
          opacity: 0.4,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-around",
        }}
      >
        <View style={styles.box}>
          <CircularProgress
            value={stepCount}
            maxValue={6500}
            radius={60}
            activeStrokeColor={"#f04444"}
            inActiveStrokeColor={"#F86262"}
            inActiveStrokeOpacity={0.5}
            inActiveStrokeWidth={20}
            activeStrokeWidth={20}
            title="Step Count"
            titleColor={"#f04444"}
          />
        </View>
        <View style={styles.box}>
          <Ionicons name="flame" size={24} color="#f04444" />
          <Text style={{ color: "#f04444" }}>{KcalBurnt} /kcal</Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>Suggested Programs</Text>
        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#B9B1BC",
            opacity: 0.4,
          }}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
