import React from "react";
import { View, StyleSheet } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types";

const Search = ({
  navigation,
}: BottomTabScreenProps<BottomTabParamList, "Search">) => {
  return <View style={styles.container}></View>;
};

export default Search;

const styles = StyleSheet.create({
  container: {},
});
