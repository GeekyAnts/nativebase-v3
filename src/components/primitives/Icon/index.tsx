import React, { useContext } from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import {
  ColorProps,
  SpaceProps,
  TypographyProps,
  color,
  space,
  typography,
} from 'styled-system';
import styled, { ThemeContext } from 'styled-components';
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

export type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

export type IconProps = TypographyProps &
  ColorProps &
  SpaceProps & {
    name: string;
    type?: IconType;
    style?: TextStyle | {};
  };

const Icon = ({ name, type, style, color, ...props }: IconProps) => {
  const theme: Theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    iconDefaultStyle: {
      fontSize: 30,
      color: theme.colors.black,
    },
  });

  const flattenedIconStyle: TextStyle = StyleSheet.flatten([
    styles.iconDefaultStyle,
    style,
    { color },
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
    case 'MaterialIcons':
      return (
        <MaterialIcons name={name} style={flattenedIconStyle} {...props} />
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

const styledIcon = styled(Icon)<IconProps>`
  ${color}
  ${space}
  ${typography}
`;

export default styledIcon;
