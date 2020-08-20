import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useAppContext } from "../../context/Context";
import { palewhite, black } from "../../constants/Colors";
import { BorderlessButton } from "react-native-gesture-handler";
import { ProfileStackParamList } from "../../types";
import { StackScreenProps } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { Text, Button } from "../../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width } from "../../constants/Layout";

const IMAGE_SIZE = width * 0.7;

const PaymentSettings = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "ProfileSettings">) => {
  const { setTabBarState } = useAppContext();
  const { top: paddingTop } = useSafeAreaInsets();

  useEffect(() => {
    setTabBarState(false);

    return () => setTabBarState(true);
  }, []);
  return (
    <View style={{ ...styles.container, paddingTop }}>
      <View>
        <BorderlessButton
          onPress={navigation.goBack}
          style={{ alignSelf: "flex-start", margin: 10 }}
        >
          <Feather name="chevron-left" size={34} color={black} />
        </BorderlessButton>
        <Text
          variant="headline"
          style={{ alignSelf: "flex-start", fontSize: 28, marginLeft: 20 }}
        >
          Payment methods
        </Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/404.png")}
          style={styles.image}
        />
        <Text
          variant="caption"
          color="grey"
          style={{ alignSelf: "center", marginTop: 30 }}
        >
          No payment methods
        </Text>
      </View>
      <Button label="New payment method" />
    </View>
  );
};

export default PaymentSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palewhite,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    alignSelf: "center",
  },
});
