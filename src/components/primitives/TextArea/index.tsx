import React, { useContext } from 'react';
import {
  StyleSheet,
  TextInput,
  TextStyle,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  space,
  variant,
  typography,
  TypographyProps,
} from 'styled-system';
import {
  customBorder,
  customBorderProps,
  customBackground,
  customBackgroundProps,
  customOutline,
  customOutlineProps,
  customLayout,
  customLayoutProps,
  customExtra,
  customExtraProps,
  customShadowProps,
  customShadow,
} from '../../../utils/customProps';
import { ThemeContext } from '../../../theme';
type SizeType = 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ITextAreaProps = ColorProps &
  SpaceProps &
  LayoutProps &
  TextInputProps &
  FlexboxProps &
  TypographyProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: TextStyle & ViewStyle;
    totalLines?: number | undefined;
    isInvalid?: boolean;
    isDisabled?: boolean;
    textSize?: SizeType | undefined;
    fontSize?: number | undefined;
  };

const StyledTextArea = styled(TextInput)<ITextAreaProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  variant({
    prop: 'textSize',
    variants: {
      '2xl': { fontSize: 5 },
      'xl': { fontSize: 4 },
      'lg': { fontSize: 3 },
      'md': { fontSize: 2 },
      'sm': { fontSize: 1 },
      'xsm': { fontSize: 0 },
    },
  })
);
StyledTextArea.defaultProps = {
  textSize: 'sm',
};
const TextArea = ({
  style,
  totalLines,
  isInvalid,
  isDisabled,
  ...props
}: ITextAreaProps) => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    props.width || props.w ? {} : { width: '100%' },
    props.borderWidth ? {} : { borderWidth: 1 },
    props.borderColor ? {} : { borderColor: 'gray' },
    isDisabled ? { opacity: 0.5, backgroundColor: theme.colors.gray[1] } : {},
    isInvalid ? { borderWidth: 1, borderColor: theme.colors.danger[2] } : {},
    props.fontSize
      ? {
          fontSize:
            props.fontSize > 5
              ? props.fontSize
              : theme.fontSizes[props.fontSize],
        }
      : {},
  ]);
  return (
    <StyledTextArea
      rounded="4"
      p={2}
      numberOfLines={totalLines ? totalLines : 2}
      multiline={true}
      editable={!isDisabled}
      placeholder="Enter your text here"
      {...props}
      style={computedStyle}
    />
  );
};

export default TextArea;
