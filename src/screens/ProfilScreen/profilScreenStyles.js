import React from "react";
import { StyleSheet } from "react-native";
import { Directions } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191418",
    paddingTop: 15,
    paddingHorizontal: 25,
    margin: 0,
  },
  text: {
    color: "#CCC7CD",
    fontSize: 17,
  },
  firstsection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252028",
    padding: 10,
    borderBottomWidth: 0,
    borderRadius: 20,
  },
  touchable: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  touchableIn: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
});
export default styles;
