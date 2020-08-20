import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "../Text";
import { height } from "../../constants/Layout";

interface ProfileDetailsProps {}
const scale = height > 700 ? 1.4 : 1.2;

const ProfileDetails = (props: ProfileDetailsProps) => {
  return (
    <>
      <Image
        source={require("../../assets/images/profile-3.png")}
        style={styles.image}
      />
      <Text variant="headline">Naveen M</Text>
      <Text variant="caption" color="grey">
        12 courses completed
      </Text>
    </>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  image: {
    width: 124 * scale,
    height: 134 * scale,
    marginTop: 50,
    marginBottom: 10,
  },
});
