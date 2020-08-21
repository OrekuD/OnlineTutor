import React from "react";
import { View, StyleSheet, ImageRequireSource, Image } from "react-native";
import Text from "../Text";
import { width } from "../../constants/Layout";
import { lightpurple } from "../../constants/Colors";

interface DetailsCardProps {
  image: ImageRequireSource;
  title: string;
  subtitle: string;
}

const DetailsCard = ({ image, title, subtitle }: DetailsCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="center" />
      </View>
      <Text variant="caption">{title}</Text>
      <Text variant="caption" color="grey">
        {subtitle}
      </Text>
    </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    width: width * 0.27,
    height: width * 0.25 * 1.5,
    alignItems: "center",
  },
  imageContainer: {
    width: "70%",
    height: "50%",
    backgroundColor: lightpurple,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  image: {
    width: "45%",
    height: "45%",
  },
});
