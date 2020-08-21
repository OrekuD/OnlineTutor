import React from "react";
import {
  View,
  StyleSheet,
  ImageRequireSource,
  Image,
  TouchableOpacity,
} from "react-native";
import Text from "../Text";
import { FontAwesome } from "@expo/vector-icons";
import { gold } from "../../constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  SearchStackParamList,
  RootStackParamList,
  MentorObj,
} from "../../types";

const IMAGE_SIZE = 60;

interface CardProps {
  item: MentorObj;
  navigation: StackNavigationProp<RootStackParamList, "Main">;
}

const Card = ({ item, navigation }: CardProps) => {
  const { name, image, rating, price } = item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Mentor", { item })}
      style={styles.container}
      activeOpacity={0.9}
    >
      <Image source={image} style={styles.image} resizeMode="contain" />
      <View style={styles.content}>
        <Text variant="caption">{name}</Text>
        <Text variant="caption" color="grey">
          ${price}
        </Text>
      </View>
      <View style={styles.row}>
        <Text variant="caption" color="grey" style={{ marginRight: 10 }}>
          {rating}
        </Text>
        <FontAwesome name="star" color={gold} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  content: {
    flex: 1,
    marginLeft: 20,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
