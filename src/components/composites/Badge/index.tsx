import React from 'react';
import styled from 'styled-components/native';
import { Box } from 'native-base';
import { space } from 'styled-system';
import type { IBadgeProps } from './props';
export type { IBadgeProps };
import { usePropsConfig } from '../../../theme';

const StyledBadge = styled(Box)<IBadgeProps>(space);

const Badge = ({ children, style, ...props }: IBadgeProps) => {
  let newProps = usePropsConfig('Badge', props);
  return (
    <StyledBadge {...newProps} style={style}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
