import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "../Text";
import { FontAwesome } from "@expo/vector-icons";
import { gold } from "../../constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, ReviewObj } from "../../types";

const IMAGE_SIZE = 60;

interface ReviewCardProps {
  item: ReviewObj;
}

const ReviewCard = ({ item }: ReviewCardProps) => {
  const { name, image, comment, rating } = item;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <View style={styles.content}>
        <Text variant="caption">{name}</Text>
        <Text variant="caption" color="grey">
          {comment}
        </Text>
      </View>
      <View style={styles.row}>
        <Text variant="caption" color="grey" style={{ marginRight: 10 }}>
          {rating}
        </Text>
        <FontAwesome name="star" color={gold} />
      </View>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
