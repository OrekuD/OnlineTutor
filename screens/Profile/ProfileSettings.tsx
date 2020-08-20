import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface ProfileSettingsProps {}

const ProfileSettings = (props: ProfileSettingsProps) => {
  return (
    <View style={styles.container}>
      <Text>ProfileSettings</Text>
    </View>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({
  container: {},
});
