import React from 'react';
import { Text } from '../index';

export const addTextAndPropsToStrings = (children: any, props: any) => {
  const TextComponents = [
    'Text',
    'Heading',
    'BreadCrumbLink',
    'StatLabel',
    'StatNumber',
    'StatHelpText',
    'Stat',
  ];
  if (Array.isArray(children)) {
    return children.map((child: JSX.Element) => {
      if (typeof child === 'string') {
        return <Text {...props}>{child}</Text>;
      } else {
        if (child && TextComponents.includes(child.type.name)) {
          const computedProp = { ...props, ...child.props };
          return React.cloneElement(child, computedProp, child.props.children);
        } else {
          return child;
        }
      }
    });
  } else {
    if (typeof children === 'string') {
      return <Text {...props}>{children}</Text>;
    } else {
      if (children && TextComponents.includes(children.type.name)) {
        const computedProp = { ...props, ...children.props };
        return React.cloneElement(
          children,
          computedProp,
          children.props.children
        );
      } else {
        return children;
      }
    }
  }
};
