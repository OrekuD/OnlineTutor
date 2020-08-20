import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { purple, grey, white } from "../constants/Colors";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

interface SearchbarProps {}

const Searchbar = (props: SearchbarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <Feather name="search" size={26} color={grey} />
        <TextInput
          style={styles.textInput}
          placeholder="Search anything"
          placeholderTextColor={grey}
        />
      </View>
      <RectButton style={styles.button}>
        <Image
          source={require("../assets/images/filter.png")}
          style={styles.filterIcon}
          resizeMode="contain"
        />
      </RectButton>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    padding: 20,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textInputContainer: {
    flex: 1,
    marginRight: 40,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    backgroundColor: white,
    borderRadius: 10,
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
    height: "80%",
    fontSize: 18,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: purple,
    borderRadius: 10,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  filterIcon: {
    width: "60%",
    height: "60%",
  },
});
