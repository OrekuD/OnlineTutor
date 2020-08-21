import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "../Text";
import { width } from "../../constants/Layout";
import { RectButton } from "react-native-gesture-handler";
import { lightpurple } from "../../constants/Colors";

const Offers = () => {
  return (
    <View style={styles.container}>
      <Text variant="caption" color="grey">
        Offers for you
      </Text>
      <RectButton activeOpacity={0.8} style={styles.card}>
        <View style={styles.content}>
          <Text variant="caption" color="purple">
            Invite Friends
          </Text>
          <Text
            variant="caption"
            color="grey"
            style={{ marginTop: 15, width: "80%" }}
          >
            Invite 3 friends and get 40% off
          </Text>
        </View>
        <Image
          source={require("../../assets/images/offers.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </RectButton>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  card: {
    width: "100%",
    height: 200,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: lightpurple,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    width: "45%",
    height: "100%",
    paddingVertical: 20,
  },
  image: {
    width: "55%",
    height: "90%",
  },
});
