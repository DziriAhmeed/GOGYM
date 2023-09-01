import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Linking,
} from "react-native";
import styles from "./homeScreenStyles";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import { Pedometer } from "expo-sensors";
import "react-native-gesture-handler";
import CircularProgress from "react-native-circular-progress-indicator";
import { Ionicons } from "@expo/vector-icons";
import EXERCICES from "../../assets/exercises/exercises";
const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const openURL = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  const [PedometerAvailability, setPedometerAvailability] = useState("");
  const [stepCount, updateStepCount] = useState(0);
  useEffect(() => {
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
          <Text style={styles.text}>Welcome Champ !!</Text>
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
      <View style={{ marginTop: 20, flex: 1 }}>
        <Text style={styles.text}>Suggested Blogs</Text>
        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#B9B1BC",
            opacity: 0.4,
          }}
        />
        <ScrollView>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#252028",
              backgroundColor: "#252028",
              width: width * 0.8,
              height: height * 0.25,
              flexDirection: "row",
              borderRadius: 5,
              flex: 1,
              marginHorizontal: 5,
              marginVertical: 5,
              elevation: 2,
              shadowColor: "#D3D3D3",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.4,
              shadowRadius: 5,
            }}
            onPress={() => {
              openURL(
                "https://www.bodybuilding.com/content/arms-workout-for-women-a-girls-guide-to-guns.htmlhttps://www.moodplan.net/skilldesmonats"
              );
            }}
          >
            <Image
              style={{
                justifyContent: "flex-end",
                borderRadius: 5,
                width: width * 0.4,
                height: height * 0.25,
              }}
              source={require("../../../assets/blogs/arm-training-for-women-header-400x225.jpg")}
            />
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                padding: 5,
              }}
            >
              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Arm Workouts for Women: Build Shape, Size, and Strength!
              </Text>
              <Text
                style={{
                  color: "white",

                  fontSize: 12,
                  alignSelf: "flex-start",
                }}
              >
                Girls need curls, too! If you want to really rock that tank top
                at the gym or.....
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#B9B1BC",
              marginHorizontal: 10,
              marginVertical: 20,
              opacity: 0.4,
            }}
          ></View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#252028",
              backgroundColor: "#252028",
              width: width * 0.8,
              height: height * 0.25,
              flexDirection: "row",
              borderRadius: 5,
              flex: 1,
              marginHorizontal: 5,
              marginVertical: 5,
              elevation: 2,
              shadowColor: "#D3D3D3",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.4,
              shadowRadius: 5,
            }}
          >
            <Image
              style={{
                justifyContent: "flex-end",
                borderRadius: 5,
                width: width * 0.4,
                height: height * 0.25,
              }}
              source={require("../../../assets/blogs/benefits-of-heart-rating-training-by-goals-header-400x225.jpg")}
            />
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                padding: 5,
              }}
            >
              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Benefits of Heart Rate Training By Goals
              </Text>
              <Text
                style={{
                  color: "white",

                  fontSize: 12,
                  alignSelf: "flex-start",
                }}
              >
                Why tracking your heart rate could be an important piece to
                reaching your goals.....
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
export default HomeScreen;
