import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import Text from "../Text";
import { width } from "../../constants/Layout";
import { white } from "../../constants/Colors";
import { RectButton } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { mentors } from "../../data/mentors";

interface Props {
  navigation: StackNavigationProp<RootStackParamList, "Main">;
}

const PopularMentors = ({ navigation }: Props) => {
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
        {mentors.map((item, index) => {
          const { id, name, role, image } = item;
          return (
            <RectButton
              key={id}
              activeOpacity={0.9}
              onPress={() => navigation.navigate("Mentor", { item })}
              style={{ ...styles.card, marginLeft: index === 0 ? 20 : 0 }}
            >
              <Image source={image} style={styles.image} resizeMode="contain" />
              <View style={styles.content}>
                <Text variant="headline" style={{ fontSize: 18 }}>
                  {name}
                </Text>
                <Text variant="caption" color="grey">
                  {role.name}
                </Text>
              </View>
            </RectButton>
          );
        })}
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
  },
  content: {
    paddingLeft: 10,
  },
});
