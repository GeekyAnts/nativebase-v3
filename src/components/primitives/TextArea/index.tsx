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

const defaultProps: ITextAreaProps = {
  rounded: '4',
  p: 2,
  px: 4,
  borderWidth: 1,
  multiline: true,
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
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    props.borderColor ? {} : { borderColor: theme.colors.gray[4] },
    isDisabled ? { opacity: 0.5, backgroundColor: theme.colors.gray[1] } : {},
    isInvalid ? { borderWidth: 1, borderColor: theme.colors.danger[2] } : {},
    props.fontSize
      ? {
          fontSize:
            props.fontSize > theme.fontSizes.length - 1 //if the fontSize passed is larger than theme fontSizes array's length then consider the passed value as fontSize
              ? props.fontSize
              : theme.fontSizes[props.fontSize],
        }
      : {},
  ]);

  return (
    <StyledTextArea
      numberOfLines={totalLines ? totalLines : 2}
      editable={!isDisabled}
      {...defaultProps}
      {...props}
      style={computedStyle}
    />
  );
};

export default TextArea;