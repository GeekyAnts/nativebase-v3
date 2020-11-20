import React from 'react';
import { Text } from '../index';

export const addTextAndPropsToStrings = (children: any, props: any) => {
  if (Array.isArray(children)) {
    return React.Children.map(children, (child: JSX.Element) => {
      if (typeof child === 'string') {
        return <Text {...props}>{child}</Text>;
      } else {
        if (child) {
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
      if (children) {
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
