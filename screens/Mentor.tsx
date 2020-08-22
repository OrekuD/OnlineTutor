import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text, Button, ReviewCard, DetailsCard } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  palewhite,
  black,
  white,
  grey,
  lightgrey,
  purple,
} from "../constants/Colors";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather, Octicons } from "@expo/vector-icons";
import { height, width } from "../constants/Layout";
import { reviews } from "../data/reviews";
import BottomSheetBehavior from "reanimated-bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";

const scale = height > 700 ? 1.4 : 1.2;

const availableTimes = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
];

const BottomSheet = ({
  activeTimeIndex,
  setActiveTimeIndex,
}: {
  activeTimeIndex: number;
  setActiveTimeIndex: React.Dispatch<React.SetStateAction<number>>;
}) => (
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
    <View style={styles.timeSection}>
      <Text variant="caption" style={{ marginVertical: 10 }}>
        Select time
      </Text>
      <View style={styles.times}>
        {availableTimes.map((time, index) => (
          <RectButton
            key={index}
            activeOpacity={0.8}
            onPress={() => setActiveTimeIndex(index)}
            style={{
              width: width * 0.28,
              height: 55,
              marginBottom: 15,
              borderRadius: 5,
            }}
          >
            <View
              style={{
                ...styles.time,
                borderWidth: index === activeTimeIndex ? 1 : 0,
              }}
            >
              <Text
                variant="caption"
                color={index === activeTimeIndex ? "purple" : "grey"}
              >
                {time}
              </Text>
            </View>
          </RectButton>
        ))}
      </View>
    </View>
    <LinearGradient
      colors={["transparent", white, white]}
      style={{ ...styles.buttonContainer }}
    >
      <Button
        label="Continue to payment"
        // onPress={() => setIsVisble(true)}
      />
    </LinearGradient>
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
  const [activeTimeIndex, setActiveTimeIndex] = useState<number>(1);
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
          <Text variant="caption" style={{ marginBottom: 5 }}>
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
      <LinearGradient
        colors={["transparent", white, white]}
        style={{ ...styles.buttonContainer, paddingBottom }}
      >
        <Button
          label="Schedule a class"
          onPress={() => bottomRef.current?.snapTo(2)}
        />
      </LinearGradient>
      <BottomSheetBehavior
        snapPoints={snapPoints}
        renderContent={() => (
          <BottomSheet
            activeTimeIndex={activeTimeIndex}
            setActiveTimeIndex={setActiveTimeIndex}
          />
        )}
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
    justifyContent: "center",
  },
  alignCenter: {
    alignSelf: "center",
  },
  cards: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
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
  timeSection: {
    margin: 15,
  },
  times: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  time: {
    width: width * 0.28,
    height: 55,
    // backgroundColor: "red",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: purple,
    borderRadius: 5,
    borderWidth: 1,
  },
});
