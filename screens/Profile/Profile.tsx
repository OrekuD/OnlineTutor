import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ProfileStackParamList } from "../../types";
import { StackScreenProps } from "@react-navigation/stack";
import { palewhite } from "../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Settings, ProfileDetails } from "../../components";

const Profile = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "Profile">) => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop: paddingTop * 2 }}>
      <ProfileDetails />
      <Settings navigation={navigation} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palewhite,
    alignItems: "center",
  },
});
