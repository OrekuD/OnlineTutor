import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList, SearchStackParamList } from "../../types";
import { palewhite, black } from "../../constants/Colors";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, PopularLogoMentors, Searchbar, Card } from "../../components";
import { StackScreenProps } from "@react-navigation/stack";
import { mentors } from "../../data/mentors";

const Search = ({
  navigation,
}: StackScreenProps<SearchStackParamList, "Search">) => {
  const { top: height } = useSafeAreaInsets();
  return (
    <>
      <View style={{ height, backgroundColor: palewhite }} />
      <ScrollView style={{ backgroundColor: palewhite }}>
        <View style={styles.container}>
          <BorderlessButton
            onPress={navigation.goBack}
            style={{ alignSelf: "flex-start", margin: 10 }}
          >
            <Feather name="chevron-left" size={34} color={black} />
          </BorderlessButton>
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../assets/images/logo-design.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text variant="headline">Logo Design</Text>
        </View>
        <PopularLogoMentors navigation={navigation} />
        <View style={{ margin: 20 }}>
          <Text variant="caption" color="grey">
            All 63 logo design mentors
          </Text>
          <Searchbar />
          {mentors.map((item, index) => (
            <Card item={item} key={index} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palewhite,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  image: {
    width: 35,
    height: 35,
    marginRight: 15,
  },
});
