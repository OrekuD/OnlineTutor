import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Text from "../Text";
import { width } from "../../constants/Layout";
import { white } from "../../constants/Colors";
import { suggestions } from "../../data/suggestions";

const CARD_WIDTH = width * 0.4;

const Suggestion = () => {
  return (
    <View style={{ marginVertical: 15 }}>
      <Text
        variant="caption"
        color="grey"
        style={{ marginVertical: 10, marginLeft: 20 }}
      >
        Suggestions for you
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginVertical: 5 }}
      >
        {suggestions.map(({ id, name, image }, index) => (
          <TouchableOpacity
            key={id}
            activeOpacity={0.9}
            style={{ ...styles.card, marginLeft: index === 0 ? 20 : 0 }}
          >
            <Image source={image} style={styles.image} resizeMode="contain" />
            <Text variant="subhead" style={{ fontSize: 18 }}>
              {name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: (CARD_WIDTH * 170) / 146,
    backgroundColor: white,
    borderRadius: 5,
    elevation: 1,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 15,
  },
  image: {
    width: CARD_WIDTH * 0.4,
    height: CARD_WIDTH * 0.4,
  },
});
