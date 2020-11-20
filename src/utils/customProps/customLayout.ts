import type * as CSS from 'csstype';
import { Config, system } from 'styled-system';

const config: Config = {
  w: {
    property: 'width',
    scale: 'sizes',
  },
  h: {
    property: 'height',
    scale: 'sizes',
  },
  boxSize: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  d: {
    property: 'display',
  },
  boxSizing: true,
};

/**
 * Types for layout related CSS properties
 */
export interface customLayoutProps {
  /**
   * The CSS `display` property
   */
  d?: CSS.Property.Display;
  /**
   * The CSS `width` property
   */
  w?: CSS.Property.Width;
  /**
   * The CSS `width` and `height` property
   */
  boxSize?: CSS.Property.Width;
  /**
   * The CSS `max-width` property
   */
  maxW?: CSS.Property.MaxWidth;
  /**
   * The CSS `min-width` property
   */
  minW?: CSS.Property.MinWidth;
  /**
   * The CSS `height` property
   */
  h?: CSS.Property.Height;
  /**
   * The CSS `max-height` property
   */
  maxH?: CSS.Property.MaxHeight;
  /**
   * The CSS `min-height` property
   */
  minH?: CSS.Property.MinHeight;
  /**
   * The CSS `box-sizing` property
   */
  boxSizing?: CSS.Property.BoxSizing;
}

export const customLayout = system(config);
