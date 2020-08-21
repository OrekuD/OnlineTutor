import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Text, Button, ReviewCard, DetailsCard } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { palewhite, black, white, grey } from "../constants/Colors";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather, Octicons } from "@expo/vector-icons";
import { height, width } from "../constants/Layout";
import { reviews } from "../data/reviews";

const scale = height > 700 ? 1.4 : 1.2;

const Mentor = ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Mentor">) => {
  const {
    item: { image, name, experience, price, rating, role, about },
  } = route.params;
  const { top: height, bottom: paddingBottom } = useSafeAreaInsets();

  return (
    <>
      <View style={{ height, backgroundColor: palewhite }} />
      <ScrollView style={{ backgroundColor: palewhite }}>
        <BorderlessButton
          onPress={navigation.goBack}
          style={{ alignSelf: "flex-start", margin: 10 }}
        >
          <Feather name="chevron-left" size={34} color={black} />
        </BorderlessButton>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <Text variant="headline" style={styles.alignCenter}>
            {name}
          </Text>
          <View style={styles.row}>
            <Octicons name="verified" color={grey} size={20} />
            <Text variant="caption" color="grey" style={{ marginLeft: 5 }}>
              Certified Tutor
            </Text>
          </View>
          <View style={styles.cards}>
            <DetailsCard
              image={role.image}
              title={role.name}
              subtitle="Specialization"
            />
            <DetailsCard
              image={require("../assets/images/briefcase.png")}
              title={experience}
              subtitle="Experience"
            />
            <DetailsCard
              image={require("../assets/images/money.png")}
              title={price}
              subtitle="Price"
            />
          </View>
          <Text variant="caption" style={{ marginVertical: 5 }}>
            About
          </Text>
          <Text
            variant="caption"
            color="grey"
            style={{ lineHeight: 24, marginBottom: 10 }}
          >
            {about}
          </Text>
          <Text variant="caption" style={{ marginVertical: 10 }}>
            Recent reviews
          </Text>
          {reviews.map((review, index) => (
            <ReviewCard item={review} key={index} />
          ))}
        </View>
      </ScrollView>
      <View style={{ ...styles.buttonContainer, paddingBottom }}>
        <Button label="Schedule a class" />
      </View>
    </>
  );
};

export default Mentor;

const styles = StyleSheet.create({
  container: {
    minHeight: height * 0.8,
    marginTop: (134 * scale) / 2,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: white,
    paddingHorizontal: 20,
    paddingBottom: 110,
  },
  image: {
    width: 124 * scale,
    height: 134 * scale,
    marginTop: -(134 * scale) / 2,
    marginVertical: 10,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: width,
    height: 110,
    backgroundColor: "rgba(255, 55, 255, 0.2)",
    justifyContent: "center",
  },
  alignCenter: {
    alignSelf: "center",
  },
  cards: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});
