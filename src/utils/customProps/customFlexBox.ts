import type * as CSS from 'csstype';
import { Config, system } from 'styled-system';

const config: Config = {
  flexDir: {
    property: 'flexDirection',
  },
};

/**
 * Types for flexbox related CSS properties
 */
export interface customFlexboxProps {
  /**
   * The CSS `flex-direction` property
   */
  flexDir?: CSS.Property.FlexDirection;
}

export const customFlexBox = system(config);
