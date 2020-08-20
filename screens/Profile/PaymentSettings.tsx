import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useAppContext } from "../../context/Context";

interface PaymentSettingsProps {}

const PaymentSettings = (props: PaymentSettingsProps) => {
  const { setTabBarState } = useAppContext();

  useEffect(() => {
    setTabBarState(false);

    return () => setTabBarState(true);
  }, []);
  return (
    <View style={styles.container}>
      <Text>PaymentSettings</Text>
    </View>
  );
};

export default PaymentSettings;

const styles = StyleSheet.create({
  container: {},
});
