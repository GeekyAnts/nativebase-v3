import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  Text,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import { border, color, flexbox, layout, space, variant } from "styled-system";
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
} from "../../../utils/customProps";
import { ThemeContext } from "../../../theme";
import { shadows } from "../../../styles";
import { Spinner, Box, IBoxProps, Flex } from "../../primitives";

import * as StyleVariant from "./styleVariants";
import type { IButtonProps } from "./IButtonProps";

const StyledView = styled(View)<
  IButtonProps & {
    colorScheme?: string | undefined;
    variant?: string | undefined;
  }
>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  variant({
    prop: "colorScheme",
    variants: {
      success: StyleVariant.successStyle,
      green: StyleVariant.successStyle,
      danger: StyleVariant.dangerStyle,
      red: StyleVariant.dangerStyle,
      warning: StyleVariant.warningStyle,
      yellow: StyleVariant.warningStyle,
      light: StyleVariant.lightStyle,
      white: StyleVariant.lightStyle,
      dark: StyleVariant.darkStyle,
      black: StyleVariant.darkStyle,
      muted: StyleVariant.mutedStyle,
      secondary: StyleVariant.mutedStyle,
      grey: StyleVariant.mutedStyle,
      default: StyleVariant.defaultStyle,
    },
  }),
  variant({
    variants: {
      outline: StyleVariant.outlineStyle,
      ghost: StyleVariant.ghostStyle,
      solid: StyleVariant.solidStyle,
      link: StyleVariant.linkStyle,
    },
  })
);
StyledView.defaultProps = {
  colorScheme: "default",
  variant: "solid",
};
const StyledAndroidButton = styled(TouchableNativeFeedback)<
  IButtonProps & TouchableNativeFeedbackProps
>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);
const StyledIOSButton = styled(TouchableOpacity)<
  IButtonProps & TouchableOpacityProps
>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);
const Button = ({
  style,
  children,
  highlight,
  variant,
  colorScheme,
  isLoading,
  isLoadingText,
  size,
  p,
  pr,
  pt,
  pb,
  pl,
  px,
  py,
  rounded,
  onClick,
  shadow,
  leftIcon,
  rightIcon,
  isDisabled,
  spinner,
  ariaLabel,
  ...props
}: IButtonProps & IBoxProps) => {
  const theme = useContext(ThemeContext);
  let spaceValue = 0;
  if (size) {
    switch (size) {
      case "xs":
        spaceValue = 0;
        break;
      case "sm":
        spaceValue = 2;
        break;
      case "md":
        spaceValue = 3;
        break;
      case "lg":
        spaceValue = 4;
        break;
      default:
        spaceValue = 2;
        break;
    }
  } else {
    spaceValue = 2;
  }

  let lightBgColor: Array<string> = [
    theme.colors.default[0],
    theme.colors.default[1],
  ];

  if (colorScheme) {
    switch (colorScheme) {
      case "success":
      case "green":
        lightBgColor = [theme.colors.success[0], theme.colors.success[1]];
        break;
      case "danger":
      case "red":
        lightBgColor = [theme.colors.danger[0], theme.colors.danger[1]];
        break;
      case "warning":
      case "yellow":
        lightBgColor = [theme.colors.warning[0], theme.colors.warning[1]];
        break;
      case "light":
      case "white":
        lightBgColor = [theme.colors.light[0], theme.colors.light[1]];
        break;
      case "dark":
      case "black":
        lightBgColor = [theme.colors.dark[0], theme.colors.dark[1]];
        break;
      case "muted":
      case "secondary":
      case "grey":
        lightBgColor = [theme.colors.muted[0], theme.colors.muted[1]];
        break;
      default:
        lightBgColor = [theme.colors.default[0], theme.colors.default[1]];
    }
  }

  let textColor = "white";
  if (
    variant == "ghost" ||
    variant == "outline" ||
    variant == "link" ||
    colorScheme == "light"
  ) {
    textColor = lightBgColor[1];
  }

  const defaultOnPress = () => {};
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      opacity: isLoading ? 0.5 : 1,
      alignItems: "center",
      borderRadius: rounded ? rounded : 3,
      borderColor: textColor,
    },
    Platform.OS === "ios" &&
    (variant == "ghost" || variant == "outline" || variant == "link")
      ? { backgroundColor: lightBgColor[0] }
      : {},
  ]);

  let shadowInd: number = shadow ? (shadow > 9 ? 9 : shadow) : 2;
  let computedButtonStyle: any = style;
  computedButtonStyle = StyleSheet.flatten([
    shadow ? shadows[shadowInd] : {},
    {
      borderRadius: rounded ? rounded : 3,
      overflow: "hidden",
    },
  ]);

  const innerButton = (
    <StyledView
      p={p ? p : 3}
      pl={pl ? pl : ""}
      pr={pr ? pr : ""}
      pb={pb ? pb : ""}
      pt={pt ? pt : ""}
      px={px ? px : 5}
      py={py ? py : ""}
      style={computedStyle}
      colorScheme={colorScheme}
      variant={variant}
      {...props}
    >
      {leftIcon ? <Box mr={3}>{leftIcon}</Box> : <></>}
      {isLoading ? (
        <Flex>
          {spinner ? spinner : <Spinner color={lightBgColor[1]} />}
          <Text>{isLoadingText ? " " + isLoadingText : ""}</Text>
        </Flex>
      ) : (
        <Text
          style={{
            color: textColor,
            fontSize: theme.fontSizes[spaceValue],
            textDecorationLine: variant == "link" ? "underline" : "none",
          }}
        >
          {children}
        </Text>
      )}
      {rightIcon ? <Box ml={3}>{rightIcon}</Box> : <></>}
    </StyledView>
  );

  if (Platform.OS === "android" && Platform.Version >= 21) {
    return (
      <Box style={computedButtonStyle} {...props}>
        <StyledAndroidButton
          accessible={true}
          accessibilityLabel={ariaLabel}
          accessibilityRole="button"
          disabled={isLoading || isDisabled ? true : false}
          onPress={onClick ? onClick : defaultOnPress}
          background={TouchableNativeFeedback.Ripple(lightBgColor[1], false)}
          {...props}
        >
          {innerButton}
        </StyledAndroidButton>
      </Box>
    );
  } else {
    return (
      <StyledIOSButton
        accessible={true}
        accessibilityLabel={ariaLabel}
        accessibilityRole="button"
        disabled={isLoading || isDisabled ? true : false}
        onPress={onClick ? onClick : defaultOnPress}
        activeOpacity={highlight ? highlight : 0.8}
        style={computedButtonStyle}
        {...props}
      >
        {innerButton}
      </StyledIOSButton>
    );
  }
};

export { IButtonProps } from "./IButtonProps";
export { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
export default Button;
