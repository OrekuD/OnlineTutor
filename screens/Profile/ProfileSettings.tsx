import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, Image, TextInput } from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";
import { palewhite, black, purple, lightgrey } from "../../constants/Colors";
import { Text, Button } from "../../components";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { height } from "../../constants/Layout";
import { RectButton } from "react-native-gesture-handler";

const scale = height > 700 ? 1.4 : 1.2;

const ProfileSettings = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "ProfileSettings">) => {
  const { setTabBarState } = useAppContext();
  const { top: paddingTop } = useSafeAreaInsets();

  useEffect(() => {
    setTabBarState(false);

    return () => setTabBarState(true);
  }, []);

  return (
    <ScrollView>
      <View style={{ ...styles.container, paddingTop }}>
        <Feather
          name="chevron-left"
          size={34}
          color={black}
          style={{ alignSelf: "flex-start", margin: 10 }}
        />
        <Text
          variant="headline"
          style={{ alignSelf: "flex-start", fontSize: 28, marginLeft: 20 }}
        >
          Edit profile
        </Text>
        <Image
          source={require("../../assets/images/profile-3.png")}
          style={styles.image}
        />
        <RectButton style={styles.button}>
          <Text variant="caption" color="white">
            Upload profile
          </Text>
        </RectButton>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text variant="caption" color="grey">
              Full Name
            </Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.section}>
            <Text variant="caption" color="grey">
              Email
            </Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.section}>
            <Text variant="caption" color="grey">
              Password
            </Text>
            <TextInput style={styles.textInput} secureTextEntry={true} />
          </View>
        </View>
        <View style={{ height: 80 }} />
        <Button label="Save changes" />
      </View>
    </ScrollView>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palewhite,
    alignItems: "center",
  },
  image: {
    width: 124 * scale,
    height: 134 * scale,
    marginVertical: 20,
  },
  button: {
    width: 124 * scale,
    height: 50,
    backgroundColor: purple,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 20,
    width: "100%",
    paddingVertical: 20,
  },
  section: {
    marginVertical: 10,
  },
  textInput: {
    width: "100%",
    height: 45,
    borderBottomWidth: 1.5,
    borderBottomColor: lightgrey,
    fontSize: 18,
  },
});
