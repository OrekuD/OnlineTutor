import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types";
import { palewhite, white } from "../constants/Colors";
import {
  Text,
  Searchbar,
  PopularMentors,
  Suggestions,
  Offers,
} from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = ({
  navigation,
}: BottomTabScreenProps<BottomTabParamList, "Home">) => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <>
      <View style={{ height: paddingTop, backgroundColor: palewhite }} />
      <ScrollView>
        <View
          style={{
            ...styles.container,
            paddingTop: paddingTop,
          }}
        >
          <Text variant="caption" color="grey" style={{ marginHorizontal: 20 }}>
            Find your mentor
          </Text>
          <Text
            variant="headline"
            style={{ marginTop: 15, marginHorizontal: 20 }}
          >
            Explore
          </Text>
          <Text variant="headline" style={{ marginHorizontal: 20 }}>
            tutors
          </Text>
          <Searchbar />
          <PopularMentors />
          <Suggestions />
          <Offers />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palewhite,
    // padding: 20,
  },
});
