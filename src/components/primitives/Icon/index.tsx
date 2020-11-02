import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { color, space, typography } from 'styled-system';
import { usePropsConfig } from 'native-base';
import styled from 'styled-components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import type { IIconProps } from './props';
import { SVGIcon } from './SVGIcon';

const Icon = (iconProps: IIconProps) => {
  if (!iconProps.name) {
    return <SVGIcon {...iconProps} />;
  }
  const { name, type, size, style, ...props } = iconProps;
  const newProps = usePropsConfig('Icon', { size });

  const flattenedIconStyle: TextStyle = StyleSheet.flatten([
    { fontSize: parseInt(newProps.size) },
    style,
  ]);
  switch (type) {
    case 'AntDesign':
      return <AntDesign name={name} style={flattenedIconStyle} {...props} />;
    case 'Entypo':
      return <Entypo name={name} style={flattenedIconStyle} {...props} />;
    case 'EvilIcons':
      return <EvilIcons name={name} style={flattenedIconStyle} {...props} />;
    case 'Feather':
      return <Feather name={name} style={flattenedIconStyle} {...props} />;
    case 'FontAwesome':
      return <FontAwesome name={name} style={flattenedIconStyle} {...props} />;
    case 'FontAwesome5':
      return <FontAwesome5 name={name} style={flattenedIconStyle} {...props} />;
    case 'Foundation':
      return <Foundation name={name} style={flattenedIconStyle} {...props} />;
    case 'Ionicons':
      return <Ionicons name={name} style={flattenedIconStyle} {...props} />;
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          style={flattenedIconStyle}
          {...props}
        />
      );
    case 'Octicons':
      return <Octicons name={name} style={flattenedIconStyle} {...props} />;
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons name={name} style={flattenedIconStyle} {...props} />
      );
    case 'Zocial':
      return <Zocial name={name} style={flattenedIconStyle} {...props} />;
    default:
      return (
        <MaterialIcons name={name} style={flattenedIconStyle} {...props} />
      );
  }
};

const styledIcon = styled(Icon)<IIconProps>(color, space, typography);

export default styledIcon;
export { IIconProps, IconType } from './props';
export { createIcon } from './createIcon';
