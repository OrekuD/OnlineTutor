import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import Text from "../Text";
import { favouriteTopics } from "../../data/favouriteTopics";
import { RectButton } from "react-native-gesture-handler";
import { width } from "../../constants/Layout";
import { white } from "../../constants/Colors";

const FavouriteTopics = () => {
  return (
    <View style={{ height: 140, marginTop: 20 }}>
      <Text variant="caption" style={{ marginVertical: 10, marginLeft: 20 }}>
        Your favourite topics
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginVertical: 5 }}
      >
        {favouriteTopics.map(({ id, name, image }, index) => (
          <RectButton
            key={id}
            activeOpacity={0.9}
            style={{ ...styles.card, marginLeft: index === 0 ? 20 : 0 }}
          >
            <Image source={image} style={styles.image} />
            <Text variant="headline" style={{ fontSize: 18, marginLeft: 10 }}>
              {name}
            </Text>
          </RectButton>
        ))}
      </ScrollView>
    </View>
  );
};

export default FavouriteTopics;

const styles = StyleSheet.create({
  card: {
    width: width * 0.55,
    height: 75,
    backgroundColor: white,
    marginRight: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    elevation: 1,
  },
  image: {
    width: 40,
    height: 40,
  },
});
