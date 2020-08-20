import React from "react";
import Svg, { Defs, ClipPath, Path, G, Rect } from "react-native-svg";

interface SvgProps {
  size: number;
  color?: string;
}

export function CreditCard({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Defs>
        <ClipPath id="prefix__a">
          <Path
            data-name="Rectangle 12"
            transform="translate(312 187.462)"
            // stroke={color}
            d="M0 0h24v24H0z"
          />
        </ClipPath>
      </Defs>
      <G data-name="Group 62">
        <G
          data-name="Mask Group 14"
          clipPath="url(#prefix__a)"
          transform="translate(-312 -187.462)"
        >
          <G
            transform="translate(312 187.462)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke={color}
          >
            <Rect
              data-name="Rectangle 41"
              width={22}
              height={16}
              rx={2}
              transform="translate(1 4)"
            />
            <Path data-name="Line 4" d="M1 10h22" />
          </G>
        </G>
      </G>
    </Svg>
  );
}
