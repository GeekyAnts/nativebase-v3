import React from 'react';
import styled from 'styled-components/native';
import { Box } from 'native-base';
import { space } from 'styled-system';
import { ThemeContext } from '../../../theme';
import type { IBadgeProps } from './props';
import { StyleSheet } from 'react-native';
export type { IBadgeProps };

const NBBadge = ({ children, style, ...props }: IBadgeProps) => {
  const colorScheme = props.colorScheme || 'muted';
  const variant = props.variant || 'subtle';
  const theme = React.useContext(ThemeContext);
  let activeColor = theme.colors.default[2];
  let computedStyle = style;
  if (colorScheme[0] === '#') activeColor = colorScheme;
  else if (colorScheme in theme.colors && theme.colors[colorScheme])
    activeColor =
      typeof theme.colors[colorScheme] === 'string'
        ? theme.colors[colorScheme]
        : theme.colors[colorScheme][5] || theme.colors[colorScheme][2];
  else activeColor = theme.colors.muted[2];

  const variantStyle = {
    outline: {
      padding: 3,
      borderColor: activeColor,
      color: activeColor,
      borderWidth: 2,
      paddingTop: 1,
      paddingVertical: 1,
      paddingHorizontal: 2,
    },
    solid: {
      padding: 2,
      backgroundColor: activeColor,
      color: theme.colors.white,
    },
    subtle: {
      padding: 2,
      backgroundColor: activeColor + '33', //To add 80% transparency
      color: theme.colors.white,
    },
  };

  computedStyle = StyleSheet.flatten([style, variantStyle[variant]]);

  return (
    <Box
      borderRadius={3}
      fontWeight="600"
      // textTransform="uppercase"   // Not working
      fontSize={theme.fontSizes['xs']}
      color={variant === 'solid' ? theme.colors.white : activeColor}
      textAlign="center"
      style={computedStyle}
      {...props}
    >
      {children}
    </Box>
  );
};

const StyledBadge = styled(NBBadge)<IBadgeProps>(space);
StyledBadge.defaultProps = {
  variant: 'subtle',
  colorScheme: 'muted',
};

const Badge = ({ children, ...props }: IBadgeProps) => {
  return <StyledBadge {...props}>{children}</StyledBadge>;
};

export default Badge;
