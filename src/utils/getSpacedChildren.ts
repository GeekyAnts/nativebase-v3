import React from 'react';

type SpaceType =
  | 'gutter'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

export default (
  children: JSX.Element[] | JSX.Element,
  space: number | undefined | SpaceType,
  axis: 'X' | 'Y'
) => {
  const childrenArray = React.Children.toArray(children);
  /*
  | Separate the trailing (not first) children from the children array
  */
  const trailingChildren = childrenArray.slice(1);
  /*
  | Set margin prop based on axis
  */
  let spaceValue;
  if (typeof space === 'string') {
    switch (space) {
      case 'gutter':
        spaceValue = 0;
        break;
      case 'xxsmall':
        spaceValue = 1;
        break;
      case 'xsmall':
        spaceValue = 2;
        break;
      case 'small':
        spaceValue = 3;
        break;
      case 'medium':
        spaceValue = 4;
        break;
      case 'large':
        spaceValue = 6;
        break;
      case 'xlarge':
        spaceValue = 7;
        break;
      case 'xxlarge':
        spaceValue = 8;
        break;

      default:
        spaceValue = 1;
        break;
    }
  } else {
    spaceValue = space;
  }

  const marginProp: object = {
    ...(axis === 'X' ? { ml: spaceValue } : { mt: spaceValue }),
  };

  /*
  | Add the margiin to the children
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trailingChildrenWithSpacing = trailingChildren.map((child: any) => {
    return React.cloneElement(child, marginProp, child.props.children);
  });
  /*
  | New children array with applied margin to trailing children
  */
  return [childrenArray[0], trailingChildrenWithSpacing];
};
