import React from 'react';
import { Text } from '../index';

export const addTextAndPropsToStrings = (children: any, props: any) => {
  if (Array.isArray(children)) {
    return children.map((child: JSX.Element) => {
      if (typeof child === 'string') {
        return <Text {...props}>{child}</Text>;
      } else {
        if (
          child &&
          (child.type.name === 'Text' ||
            child.type.name === 'Heading' ||
            child.type.name === 'BreadCrumbLink')
        ) {
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
      if (
        children &&
        (children.type.name === 'Text' ||
          children.type.name === 'Heading' ||
          children.type.name === 'BreadCrumbLink')
      ) {
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
