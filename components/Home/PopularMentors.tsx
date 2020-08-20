import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Text from "../Text";
import { popular } from "../../data/popular";
import { width } from "../../constants/Layout";
import { white } from "../../constants/Colors";

const PopularMentors = () => {
  return (
    <View>
      <Text
        variant="caption"
        color="grey"
        style={{ marginVertical: 10, marginLeft: 20 }}
      >
        Popular mentors
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginVertical: 5 }}
      >
        {popular.map(({ id, name, role, image }, index) => (
          <TouchableOpacity
            key={id}
            activeOpacity={0.9}
            style={{ ...styles.card, marginLeft: index === 0 ? 20 : 0 }}
          >
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
              <Text variant="headline" style={{ fontSize: 18 }}>
                {name}
              </Text>
              <Text variant="caption" color="grey">
                {role}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default PopularMentors;

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
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  content: {
    paddingLeft: 10,
  },
});
