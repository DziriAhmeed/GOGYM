import React from "react";
import { TextInput, View } from "react-native";

const Input = ({ textInputConfig }) => {
  return (
    <View>
      <TextInput {...textInputConfig} />
    </View>
  );
};
