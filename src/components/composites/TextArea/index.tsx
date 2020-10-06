import React from 'react';
import { StyleSheet, TextInput, TextStyle, TextInputProps } from 'react-native';
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
import { theme } from '../../../theme';
export type ITextAreaProps = ColorProps &
  SpaceProps &
  LayoutProps &
  TextInputProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: TextStyle;
    children?: string | undefined | JSX.Element[] | JSX.Element;
    fontSize?: string | undefined;
    totalLines?: number | undefined;
    isInvalid?: boolean;
    textSize?: string | undefined;
  };

const StyledTextArea = styled(TextInput)<ITextAreaProps>(
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
    prop: 'textSize',
    variants: {
      '2xl': { fontSize: theme.fontSizes[5] },
      'xl': { fontSize: theme.fontSizes[4] },
      'lg': { fontSize: theme.fontSizes[3] },
      'md': { fontSize: theme.fontSizes[2] },
      'sm': { fontSize: theme.fontSizes[1] },
      'xsm': { fontSize: theme.fontSizes[0] },
    },
  })
);
StyledTextArea.defaultProps = {
  textSize: 'md',
};
const TextArea = ({
  style,
  totalLines,
  isInvalid,
  ...props
}: ITextAreaProps) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      borderWidth: 1,
      borderColor: 'gray',
      width: '100%',
    },
    isInvalid ? { borderWidth: 1, borderColor: 'red' } : {},
    props.fontSize ? { fontSize: props.fontSize } : {},
  ]);
  return (
    <StyledTextArea
      rounded="4"
      numberOfLines={totalLines ? totalLines : 2}
      multiline={true}
      {...props}
      style={computedStyle}
    />
  );
};

export default TextArea;
