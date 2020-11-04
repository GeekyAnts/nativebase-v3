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
import Container from './container';
import Box from './box';
import Flex from './flex';

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
  Container,
  Box,
  Flex,
  // not done
  Button,
};

export type IThemeComponents =
  | 'Avatar'
  | 'Button'
  | 'Badge'
  | 'Center'
  | 'Code'
  | 'Divider'
  | 'Heading'
  | 'Icon'
  | 'Image'
  | 'Kbd'
  | 'Progress'
  | 'Link'
  | 'Switch'
  | 'Tag'
  | 'Wrap'
  | 'Container'
  | 'BreadCrumb'
  | 'Box'
  | 'Flex';
