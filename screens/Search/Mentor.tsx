import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { SearchStackParamList } from "../../types";

const Mentor = ({
  navigation,
  route,
}: StackScreenProps<SearchStackParamList, "Mentor">) => {
  const { setTabBarState } = useAppContext();
  const { item } = route.params;

  useEffect(() => {
    setTabBarState(false);

    return () => setTabBarState(true);
  }, []);
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
