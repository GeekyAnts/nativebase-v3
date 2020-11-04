import Heading from './heading';
import Code from './code';
import Badge from './badge';
import Tag from './tag';
import Avatar from './avatar';
import Center from './center';
import Switch from './switch';
import Image from './image';
import Button from './button';
import Wrap from './wrap';
import Icon from './icon';
import Divider from './divider';
import BreadCrumb from './breadcrumb';
import Link from './link';
import Kbd from './kbd';
import Progress from './progress';
import Box from './box';

export default {
  Heading,
  Code,
  Badge,
  Tag,
  Center,
  Avatar,
  Switch,
  Wrap,
  Image,
  Divider,
  Link,
  Icon,
  BreadCrumb,
  Kbd,
  Progress,
  Box,
  // not done
  Button,
};

export type IThemeComponents =
  | 'Heading'
  | 'Code'
  | 'Badge'
  | 'Tag'
  | 'Avatar'
  | 'Button'
  | 'Center'
  | 'Switch'
  | 'Wrap'
  | 'Image'
  | 'Divider'
  | 'Link'
  | 'Icon'
  | 'Divider'
  | 'BreadCrumb'
  | 'Kbd'
  | 'Progress'
  | 'Box';
