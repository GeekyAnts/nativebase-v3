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
          (child.type.name === 'Text' || child.type.name === 'Heading')
        ) {
          return React.cloneElement(child, props, child.props.children);
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
        (children.type.name === 'Text' || children.type.name === 'Heading')
      ) {
        return React.cloneElement(children, props, children.props.children);
      } else {
        return children;
      }
    }
  }
};
