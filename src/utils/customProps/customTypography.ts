import { Config, system } from 'styled-system';
import type * as CSS from 'csstype';

const config: Config = {
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecoration: true,
  txtDecor: { property: 'textDecoration' },
};

/**
 * Types for typography related CSS properties
 */
export interface customTypographyProps {
  /**
   * The CSS `word-break` property
   */
  wordBreak?: CSS.Property.WordBreak;
  /**
   * The CSS `overflow-wrap` property
   */
  overflowWrap?: CSS.Property.OverflowWrap;
  /**
   * The CSS `text-overflow` property
   */
  textOverflow?: CSS.Property.TextOverflow;
  /**
   * The CSS `text-transform` property
   */
  textTransform?: CSS.Property.TextTransform;
  /**
   * The CSS `white-space` property
   */
  whiteSpace?: CSS.Property.WhiteSpace;
  /**
   * The CSS `text-decoration` property
   */
  textDecoration?: CSS.Property.TextDecoration;
  /**
   * The CSS `text-decoration` property
   */
  txtDecor?: CSS.Property.TextDecoration;
}

export const customTypography = system(config);
