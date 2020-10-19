import React from 'react';
import { ViewStyle, StyleSheet } from 'react-native';

import { Box, IBoxProps } from '../../primitives';
import { ThemeContext } from '../../../theme';

type SpaceType = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type IProgressProps = IBoxProps & {
  style?: ViewStyle;
  children?: JSX.Element | JSX.Element[];
  value?: number | undefined;
  size?: SpaceType | string | undefined;
  colorScheme?: string | undefined;
  isIndeterminate?: any | undefined;
};
import * as StyleVariant from './styleVariants';

const Progress = ({
  value,
  size,
  isIndeterminate,
  ...props
}: IProgressProps) => {
  const theme = React.useContext(ThemeContext);
  // const width = new Animated.Value(0);
  // useEffect(() => {
  //   Animated.loop(
  //     Animated.timing(width, {
  //       toValue: 270,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     })
  //   ).start();
  // });
  let spaceValue = 0;
  let customSize: string = '';
  if (size) {
    switch (size) {
      case '2xs':
        spaceValue = 1;
        break;
      case 'xs':
        spaceValue = 2;
        break;
      case 'sm':
        spaceValue = 3;
        break;
      case 'md':
        spaceValue = 4;
        break;
      case 'lg':
        spaceValue = 6;
        break;
      case 'xl':
        spaceValue = 7;
        break;
      case '2xl':
        spaceValue = 8;
        break;
      default:
        spaceValue = 1;
        customSize = size;
        break;
    }
  } else {
    spaceValue = 2;
  }
  let barBgColor = { backgroundColor: theme.colors.default[0] };
  if (props.colorScheme) {
    switch (props.colorScheme) {
      case 'success':
      case 'green':
        barBgColor = StyleVariant.successStyle;
        break;
      case 'danger':
      case 'red':
        barBgColor = StyleVariant.dangerStyle;
        break;
      case 'warning':
      case 'yellow':
        barBgColor = StyleVariant.warningStyle;
        break;
      case 'light':
      case 'white':
        barBgColor = StyleVariant.lightStyle;
        break;
      case 'dark':
      case 'black':
        barBgColor = StyleVariant.darkStyle;
        break;
      case 'muted':
      case 'secondary':
      case 'grey':
        barBgColor = StyleVariant.mutedStyle;
        break;
      default:
        barBgColor = StyleVariant.defaultStyle;
    }
  }
  if (barBgColor == StyleVariant.defaultStyle && props.colorScheme) {
    barBgColor = { backgroundColor: props.colorScheme };
  }

  let computedStyle: any = barBgColor;

  computedStyle = StyleSheet.flatten([barBgColor, {}]);

  return (
    <Box
      height={customSize === '' ? theme.space[spaceValue] : customSize}
      bg="gray.1"
      style={props.style}
      {...props}
    >
      {isIndeterminate ? (
        // <Animated.View
        //   style={[
        //     {
        //       transform: [
        //         {
        //           translateX: width,
        //         },
        //       ],
        //     },
        //   ]}
        // >

        // </Animated.View>
        <Box
          shadow={0}
          rounded={props.rounded}
          style={computedStyle}
          w={value + '%'}
          height={customSize === '' ? theme.space[spaceValue] : customSize}
        />
      ) : (
        <Box
          shadow={0}
          rounded={props.rounded}
          style={computedStyle}
          w={value + '%'}
          height={customSize === '' ? theme.space[spaceValue] : customSize}
        />
      )}
    </Box>
  );
};

export default Progress;
