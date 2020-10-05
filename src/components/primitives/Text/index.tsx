import styled from 'styled-components/native';
import {
  ColorProps,
  SpaceProps,
  TypographyProps,
  color,
  position,
  space,
  typography,
} from 'styled-system';

export type TextProps = ColorProps | SpaceProps | TypographyProps;

const Text = styled.Text<TextProps>`
  ${position}
  ${color}
  ${space}
  ${typography}
`;

export default Text;
