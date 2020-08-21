import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

const Mentor = ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Mentor">) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text>Mentor</Text>
    </View>
  );
};

export default Mentor;

const styles = StyleSheet.create({
  container: {},
});
