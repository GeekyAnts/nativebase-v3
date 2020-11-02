import Heading from './heading';
import Code from './code';
import Badge from './badge';
import Tag from './tag';
import Avatar from './avatar';
import Center from './center';

import Button from './button';

export default {
  Heading,
  Code,
  Badge,
  Tag,
  Center,
  // not done
  Avatar,
  Button,
};

export type IThemeComponents =
  | 'Heading'
  | 'Code'
  | 'Badge'
  | 'Tag'
  | 'Avatar'
  | 'Button'
  | 'Center';
