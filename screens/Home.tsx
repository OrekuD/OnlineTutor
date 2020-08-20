import React from "react";
import { View, StyleSheet } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types";
import { palewhite } from "../constants/Colors";
import { Text, Searchbar } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = ({
  navigation,
}: BottomTabScreenProps<BottomTabParamList, "Home">) => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop: paddingTop * 2 }}>
      <Text variant="caption" color="grey">
        Find your mentor
      </Text>
      <Text variant="headline" style={{ marginTop: 15 }}>
        Explore
      </Text>
      <Text variant="headline">tutors</Text>
      <Searchbar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palewhite,
    padding: 20,
  },
});
