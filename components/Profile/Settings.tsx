import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ProfileStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import Text from "../Text";
import { width } from "../../constants/Layout";
import { Feather } from "@expo/vector-icons";
import { purple } from "../../constants/Colors";
import { CreditCard } from "../Svgs";

interface SettingsProp {
  navigation: StackNavigationProp<ProfileStackParamList, "Profile">;
}

const Settings = ({ navigation: { navigate } }: SettingsProp) => {
  return (
    <View style={styles.container}>
      <Text variant="subhead">Settings</Text>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate("ProfileSettings")}
        style={styles.section}
      >
        <Feather name="user" color={purple} size={36} />
        <Text variant="caption" color="grey" style={{ marginLeft: 20 }}>
          Profile settings
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate("PaymentSettings")}
        style={styles.section}
      >
        <CreditCard color={purple} size={34} />
        <Text variant="caption" color="grey" style={{ marginLeft: 20 }}>
          Payment settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  section: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
