import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface PaymentSettingsProps {}

const PaymentSettings = (props: PaymentSettingsProps) => {
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
