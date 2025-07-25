import React, { forwardRef } from "react";

import {
  TextInput,
  View,
  Text,
  TextInputProps,
  TouchableOpacity,
  StyleProp,
  TextStyle,
} from "react-native";
import { themes } from "../../global/themes";
import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import { style } from "./styles";

type IconComponent =
  | React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
  | React.ComponentType<React.ComponentProps<typeof FontAwesome>>
  | React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
  IconLeft?: IconComponent;
  IconRight?: IconComponent;
  IconLeftName?: string;
  IconRightName?: string;
  title?: string;
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
  height?:number,
  labelStyle?:StyleProp<TextStyle>
};

export const Input = forwardRef<TextInput, Props>((Props) => {
  const {
    IconLeft,
    IconRight,
    IconLeftName,
    IconRightName,
    title,
    onIconLeftPress,
    onIconRightPress,
    labelStyle,
    height,
    ...rest
  } = Props;

  const calculateSizeWidht = () => {
    if (IconLeft && IconRight) {
      return "80%";
    } else if (IconLeft || IconRight) {
      return "90%";
    } else {
      return "100%";
    }
  };

  const calculateSizePaddingLeft = () => {
    if (IconLeft && IconRight) {
      return 10;
    } else if (IconLeft || IconRight) {
      return 10;
    } else {
      return 20;
    }
  };

  return (
    <>
      {title&&<Text style={[style.titleInput, labelStyle]}>{title}</Text>}

      <View style={[style.boxInput, {paddingLeft: calculateSizePaddingLeft(), height:height||40, padding: 10}]}>
        {IconLeft && IconLeftName && (
          <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
            <IconLeft
              name={IconLeftName as any}
              size={20}
              color={themes.colors.gray}
              style={style.Icon}
            />
          </TouchableOpacity>
        )}

        <TextInput style={[style.input, {width: calculateSizeWidht(), height: '100%'}]} {...rest} />

        {IconRight && IconRightName && (
          <TouchableOpacity onPress={onIconRightPress} style={style.Button}>
            <IconRight
              name={IconRightName as any}
              size={20}
              color={themes.colors.gray}
              style={style.Icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
});
