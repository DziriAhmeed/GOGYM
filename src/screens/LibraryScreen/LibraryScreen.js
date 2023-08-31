import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styles from "./libraryScreenStyel.js";
import { LibraryMenu } from "../../utils/constants";

const LibraryScreen = ({ navigation }) => {
  const renderLibraryItem = ({ item, index }) => {
    console.log(item.navigateParmas);
    return (
      <TouchableOpacity
        key={item.id}
        style={{ borderRadius: 5 }}
        onPress={() => {
          navigation.navigate(item.navigateParmas);
        }}
      >
        <View
          style={{
            width: Dimensions.get("window").width * 0.4,
            height: Dimensions.get("window").height * 0.25,
            borderRadius: 5,
            flex: 1,
            marginHorizontal: 5,
            elevation: 2,
            shadowColor: "#D3D3D3",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.4,
            shadowRadius: 5,
            overflow: "hidden",
          }}
        >
          <ImageBackground
            source={item.image}
            resizeMode="stretch"
            style={{
              justifyContent: "flex-end",
              borderRadius: 5,
              width: Dimensions.get("window").width * 0.4,
              height: Dimensions.get("window").height * 0.25,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: " rgba(0, 0, 0, 0.5)",
                paddingVertical: 5,
                width: Dimensions.get("window").width * 0.4,
              }}
            >
              <Text style={{ color: "white" }}>{item.title}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={LibraryMenu}
        contentContainerStyle={{ gap: 5 }}
        numColumns={2}
        renderItem={renderLibraryItem}
      />
    </View>
  );
};
export default LibraryScreen;
