import React from 'react';
import { ThemeContext } from 'native-base';
import styled from 'styled-components';
import { color, space, typography } from 'styled-system';
import Svg, { G, Path, Circle } from 'react-native-svg';
import type { IIconProps } from './props';

const SVG = styled(Svg)<IIconProps>(color, space, typography);
const SVGIcon = ({
  viewBox,
  color: colorProp,
  stroke,
  children,
  focusable,
  boxSize,
  style,
}: IIconProps) => {
  const theme = React.useContext(ThemeContext);
  let size =
    typeof boxSize === 'string'
      ? theme.fontSizes[boxSize]
      : typeof boxSize === 'number'
      ? theme.sizes[boxSize]
      : 20;
  size = size ? parseInt(size, 10) : 20;
  return (
    <SVG
      height={size}
      width={size}
      viewBox={viewBox}
      color={colorProp}
      stroke={stroke}
      focusable={focusable}
      accessibilityRole={'image'}
      style={style}
    >
      {React.Children.count(children) > 0 ? (
        <G>
          {React.Children.map(children, ({ props: childProps, type }: any) => {
            if (type === 'path') {
              return (
                <Path
                  {...childProps}
                  fill={childProps.fill ? childProps.fill : 'currentColor'}
                />
              );
            }
            return null;
          })}
        </G>
      ) : (
        getDefaultIcon()
      )}
    </SVG>
  );
};
const getDefaultIcon = () => {
  return (
    <G strokeWidth={1.5} stroke="currentColor">
      <Path
        d={'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25'}
        fill="none"
      />
      <Path
        d={'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0'}
        fill="none"
      />
      <Circle cx="12" cy="12" r="11.25" fill="none" />
    </G>
  );
};
export { SVGIcon };
