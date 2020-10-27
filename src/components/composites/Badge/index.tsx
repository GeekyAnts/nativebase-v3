import React from 'react';
import styled from 'styled-components/native';
import { Box } from 'native-base';
import { space } from 'styled-system';
import type { IBadgeProps } from './props';
export type { IBadgeProps };
import { useStyleConfig } from '../../../theme';

const StyledBadge = styled(Box)<IBadgeProps>(space);

const Badge = ({ children, ...props }: IBadgeProps) => {
  let { style, newProps } = useStyleConfig('Badge', props);
  return (
    <StyledBadge {...newProps} style={style}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
