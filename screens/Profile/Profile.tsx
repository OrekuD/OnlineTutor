import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ProfileStackParamList } from "../../types";
import { StackScreenProps } from "@react-navigation/stack";
import { palewhite } from "../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, Settings } from "../../components";
import { height } from "../../constants/Layout";

const scale = height > 700 ? 1.4 : 1.2;

const Profile = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "Profile">) => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop }}>
      <Image
        source={require("../../assets/images/profile-3.png")}
        style={styles.image}
      />
      <Text variant="headline">Naveen M</Text>
      <Text variant="caption" color="grey">
        12 courses completed
      </Text>
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
  image: {
    width: 124 * scale,
    height: 134 * scale,
    marginTop: 50,
    marginBottom: 10,
  },
});
