import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { palewhite, purple } from "../constants/Colors";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={purple} size="large" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palewhite,
    alignItems: "center",
    justifyContent: "center",
  },
});
