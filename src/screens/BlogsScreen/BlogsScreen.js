import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import styles from "./blogsScreenStyles";
const { width, height } = Dimensions.get("window");

const BlogsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> welcome to blogs</Text>
      <ScrollView>
        <View>
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
          <View
            style={{
              borderWidth: 1,
              borderColor: "#B9B1BC",
              marginHorizontal: 10,
              marginVertical: 20,
              opacity: 0.4,
            }}
          ></View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#B9B1BC",
              marginHorizontal: 20,
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
              source={require("../../../assets/blogs/nasm-header-mobile-b-400x225.jpg")}
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
                Bodybuilding.com x NASM
              </Text>
              <Text
                style={{
                  color: "white",

                  fontSize: 12,
                  alignSelf: "flex-start",
                }}
              >
                NASM's mission, reputation, and commitment to expert-driven
                strategies and learning innovations.....
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
              source={require("../../../assets/blogs/why-low-grip-strength-can-affect-your-overall-health-header-400x225.jpg")}
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
                Why Low Grip Strength Can Affect Your Overall Health
              </Text>
              <Text
                style={{
                  color: "white",

                  fontSize: 12,
                  alignSelf: "flex-start",
                }}
              >
                Is grip strength more important than we thought?
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
        </View>
      </ScrollView>
    </View>
  );
};
export default BlogsScreen;
