import React, { ReactNode } from "react";
import { Text as DefaultText, View, StyleSheet, TextStyle } from "react-native";
import { white, black, grey, lightgrey, purple } from "../constants/Colors";

interface TextProps {
  children: ReactNode;
  style?: TextStyle;
  variant: "title" | "headline" | "body" | "subhead" | "caption";
  color?: "white" | "grey" | "lightgrey" | "purple";
  numberOfLines?: number;
}

const Text = ({
  style,
  children,
  variant,
  color,
  numberOfLines,
}: TextProps) => {
  let textStyle;
  let textColor;

  switch (variant) {
    case "title":
      textStyle = styles.title;
      break;
    case "headline":
      textStyle = styles.headline;
      break;
    case "body":
      textStyle = styles.body;
      break;
    case "subhead":
      textStyle = styles.subhead;
      break;
    case "caption":
      textStyle = styles.caption;
      break;
    default:
      break;
  }

  switch (color) {
    case "white":
      textColor = white;
      break;
    case "grey":
      textColor = grey;
      break;
    case "lightgrey":
      textColor = lightgrey;
      break;
    case "purple":
      textColor = purple;
      break;
    default:
      textColor = black;
      break;
  }

  return (
    <DefaultText
      style={{ ...textStyle, color: textColor, ...style }}
      numberOfLines={numberOfLines}
    >
      {children}
    </DefaultText>
  );
};

export default Text;

Text.defaultProps = {
  variant: "default",
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: "SFProDisplay-Medium",
  },
  headline: {
    fontSize: 34,
    fontFamily: "SFProDisplay-SemiBold",
  },
  body: {
    fontSize: 22,
    fontFamily: "SFProDisplay-Regular",
  },
  subhead: {
    fontSize: 20,
    fontFamily: "SFProDisplay-Medium",
  },
  caption: {
    fontSize: 18,
    fontFamily: "SFProDisplay-Medium",
  },
});
