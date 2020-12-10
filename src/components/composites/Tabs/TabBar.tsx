import React from 'react';
import getIndexedChildren from '../../../utils/getIndexedChildren';
import { Box } from '../../primitives';
import { TabsContext, ITabsContextProps, ITabBarProps } from './index';

const TabBar = ({ children, ...props }: ITabBarProps) => {
  const { tabBarStyle, align, isFitted }: ITabsContextProps = React.useContext(
    TabsContext
  );

  const accessibilityProps = {
    accessible: true,
    accessibilityRole: 'tablist',
    accessibilityLabel:
      props.accessibilityLabel ?? `${React.Children.count(children)} items`,
  };

  return (
    <Box
      flexDirection="row"
      width="100%"
      justifyContent={isFitted ? 'space-between' : align}
      {...accessibilityProps}
      {...tabBarStyle}
      {...props}
    >
      {getIndexedChildren(children, 'Tab')}
    </Box>
  );
};

export default TabBar;
