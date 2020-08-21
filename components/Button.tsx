import React from "react";
import { StyleSheet } from "react-native";
import { purple } from "../constants/Colors";
import { width } from "../constants/Layout";
import Text from "./Text";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <RectButton onPress={onPress} style={styles.container}>
      <Text variant="caption" color="white">
        {label}
      </Text>
    </RectButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 50,
    backgroundColor: purple,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
