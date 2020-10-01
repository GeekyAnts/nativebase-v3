import type * as CSS from 'csstype';
import { Config, system } from 'styled-system';

const config: Config = {
  animation: true,
  appearance: true,
  visibility: true,
  userSelect: true,
  pointerEvents: true,
  cursor: true,
  resize: true,
  objectFit: true,
  objectPosition: true,
  float: true,
  willChange: true,
};

export interface customExtraProps {
  /**
   * The CSS `animation` property
   */
  animation?: CSS.Property.Animation;
  /**
   * The CSS `appearance` property
   */
  appearance?: CSS.Property.Appearance;
  /**
   * The CSS `visibility` property
   */
  visibility?: CSS.Property.Visibility;
  /**
   * The CSS `user-select` property
   */
  userSelect?: CSS.Property.UserSelect;
  /**
   * The CSS `pointer-events` property
   */
  pointerEvents?: CSS.Property.PointerEvents;
  /**
   * The CSS `cursor` property
   */
  cursor?: CSS.Property.Cursor;
  /**
   * The CSS `resize` property
   */
  resize?: CSS.Property.Resize;
  /**
   * The CSS `object-fit` property
   */
  objectFit?: CSS.Property.ObjectFit;
  /**
   * The CSS `object-psition` property
   */
  objectPosition?: CSS.Property.ObjectPosition;
  /**
   * The CSS `float` property
   */
  float?: CSS.Property.Float;
  /**
   * The CSS `will-change` property
   */
  willChange?: CSS.Property.WillChange;
}

export const customExtra = system(config);
