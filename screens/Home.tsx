import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { RootStackParamList } from "../types";
import { palewhite } from "../constants/Colors";
import {
  Text,
  Searchbar,
  PopularMentors,
  Suggestions,
  Offers,
} from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";

const Home = ({ navigation }: StackScreenProps<RootStackParamList, "Main">) => {
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
          <View style={{ marginHorizontal: 20 }}>
            <Searchbar />
          </View>
          <PopularMentors navigation={navigation} />
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
