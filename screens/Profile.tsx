import React from "react";
import { View, StyleSheet } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types";

const Profile = ({
  navigation,
}: BottomTabScreenProps<BottomTabParamList, "Profile">) => {
  return <View style={styles.container}></View>;
};

export default Profile;

const styles = StyleSheet.create({
  container: {},
});
