import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Text, Button, ReviewCard, DetailsCard } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { palewhite, black, white, grey, lightgrey } from "../constants/Colors";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather, Octicons } from "@expo/vector-icons";
import { height, width } from "../constants/Layout";
import { reviews } from "../data/reviews";
import BottomSheetBehavior from "reanimated-bottom-sheet";

const scale = height > 700 ? 1.4 : 1.2;

const renderContent = () => (
  <View style={styles.modalContent}>
    <View style={styles.knob} />
    <Text variant="caption" style={{ alignSelf: "center" }}>
      Schedule a class
    </Text>
    <View style={styles.section}>
      <Text variant="caption">Select day</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          variant="caption"
          color="grey"
          style={{ marginRight: 3, marginBottom: 3 }}
        >
          July
        </Text>
        <Feather name="chevron-down" color={grey} size={28} />
      </View>
    </View>
    <View style={{ ...styles.buttonContainer }}>
      <Button
        label="Continue to payment"
        // onPress={() => setIsVisble(true)}
      />
    </View>
  </View>
);

const Mentor = ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Mentor">) => {
  const {
    item: { image, name, experience, price, rating, role, about },
  } = route.params;
  const { top, bottom: paddingBottom } = useSafeAreaInsets();
  const [isVisible, setIsVisble] = useState<boolean>(false);
  const bottomRef = useRef<BottomSheetBehavior>();

  const snapPoints = [0, height * 0.4, height * 0.7];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: top, backgroundColor: palewhite }} />
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
        <Button
          label="Schedule a class"
          onPress={() => bottomRef.current?.snapTo(2)}
        />
      </View>
      <BottomSheetBehavior
        snapPoints={snapPoints}
        renderContent={renderContent}
        initialSnap={0}
        ref={bottomRef}
      />
    </View>
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
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    height: height * 0.7,
    width: width,
    backgroundColor: palewhite,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  knob: {
    width: 50,
    height: 5,
    backgroundColor: grey,
    borderRadius: 3,
    marginVertical: 15,
    alignSelf: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 15,
  },
});
