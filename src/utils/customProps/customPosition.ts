import type * as CSS from 'csstype';
import { Config, system } from 'styled-system';

const config: Config = {
  pos: {
    property: 'position',
  },
  inset: {
    properties: ['left', 'top', 'bottom', 'right'],
    scale: 'space',
  },
  insetX: {
    properties: ['left', 'right'],
    scale: 'space',
  },
  insetY: {
    properties: ['top', 'bottom'],
    scale: 'space',
  },
};

/**
 * Types for position CSS properties
 */
export interface customPositionProps {
  /**
   * The CSS `left`, `right`, `top`, `bottom` property
   */
  inset?: CSS.Property.Left;
  /**
   * The CSS `left`, and `right` property
   */
  insetX?: CSS.Property.Left;
  /**
   * The CSS `top`, and `bottom` property
   */
  insetY?: CSS.Property.Left;
  /**
   * The CSS `position` property
   */
  pos?: CSS.Property.Position;
}

export const customPosition = system(config);
