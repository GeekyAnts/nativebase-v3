import Heading from './heading';
import Code from './code';
import Badge from './badge';
import Tag from './tag';
import Avatar from './avatar';
import Switch from './switch';

import Button from './button';

export default {
  Heading,
  Code,
  Badge,
  Tag,
  Avatar,
  Switch,
  // not done
  Button,
};

export type IThemeComponents =
  | 'Heading'
  | 'Code'
  | 'Badge'
  | 'Tag'
  | 'Avatar'
  | 'Switch'
  | 'Button';
