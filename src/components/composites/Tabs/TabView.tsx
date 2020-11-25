import React from 'react';
import { Box } from '../../primitives';
import { TabsContext, ITabsContextProps, ITabViewProps } from './index';

const TabView = ({ index, children, ...props }: ITabViewProps) => {
  const { activeIndex }: ITabsContextProps = React.useContext(TabsContext);
  const tabViewTemplate = () => {
    return activeIndex === index ? (
      <Box p={3} {...props}>
        {children}
      </Box>
    ) : null;
  };
  return tabViewTemplate();
};

export default TabView;
