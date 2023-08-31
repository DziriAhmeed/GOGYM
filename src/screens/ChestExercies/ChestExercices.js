import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styles from "./chestExercicesStyles";
import CHEST_EXERCICES from "../../assets/exercises/chest";
const { width, height } = Dimensions.get("window");
export const ChestExercises = () => {
  const renderLibraryItem = ({ item, index }) => {
    return (
      <TouchableOpacity key={item.id} style={{ borderRadius: 5 }}>
        <View
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
            source={item.images[0]}
            resizeMode="contain"
            style={{
              justifyContent: "flex-end",
              borderRadius: 5,
              width: width * 0.4,
              height: height * 0.25,
            }}
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
              {item.name}
            </Text>
            {item.secondaryMuscles.map((item, index) => (
              <Text
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: 12,
                  alignSelf: "flex-start",
                }}
              >
                {item}
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CHEST_EXERCICES}
        contentContainerStyle={{ gap: 5 }}
        renderItem={renderLibraryItem}
      />
    </View>
  );
};
