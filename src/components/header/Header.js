import { View, Text } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 5 }}>
      <Text style={{ fontWeight: "500", fontSize: 20, color: "white" }}>
        {props.name}
      </Text>
    </View>
  );
};

export default Header;
