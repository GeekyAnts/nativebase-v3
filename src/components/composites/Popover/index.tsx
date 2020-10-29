import React from 'react';
import Tooltip from './Tooltip';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
} from '../../../utils/customProps';

import type { IPopoverProps } from './props';
import { Box, CloseButton, View, IBoxProps, ThemeContext } from '../../..';

const StyledPopover = styled(Tooltip)<IPopoverProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);

const PopoverContext = React.createContext({
  PopoverTrigger: <></>,
  setPopoverTrigger: (_child: JSX.Element[] | JSX.Element) => {},
  PopoverRef: null,
});

const Popover = ({
  children,
  isCentered,
  initialFocusRef,
  finalFocusRef,
  size,
  justifyContent,
  alignItems,
  id,
  ...props
}: IPopoverProps) => {
  const [trigger, setTrigger] = React.useState(<></>);
  const popOverRef: any = React.useRef(null);
  const value: any = {
    PopoverTrigger: trigger,
    setPopoverTrigger: setTrigger,
    PopoverRef: popOverRef,
  };

  return (
    <PopoverContext.Provider value={value}>
      <View nativeID={id}>{children}</View>
    </PopoverContext.Provider>
  );
};

export const PopoverTrigger = ({ children, ...props }: any) => {
  const { setPopoverTrigger } = React.useContext(PopoverContext);
  const triggerProps = {
    isDisabled: true,
  };
  let trigger: JSX.Element[] = [];
  React.Children.map(children, (child) => {
    // console.log('child asdjahskj', child);
    trigger.push(React.cloneElement(child, triggerProps, child.props));
  });
  React.useEffect(() => {
    setPopoverTrigger(children);
  }, []);

  return <></>;
};
export const PopoverHeader = (props: IBoxProps) => {
  return <Box pb={3} px={3} {...props} />;
};
export const PopoverContent = ({ children, ...props }: any) => {
  const { PopoverRef, PopoverTrigger } = React.useContext(PopoverContext);
  const theme = React.useContext(ThemeContext);
  return (
    <StyledPopover
      backgroundColor={theme.colors.gray[1]}
      height={'auto'}
      ref={PopoverRef}
      popover={
        <Box
          style={{
            width: '100%',
          }}
        >
          <Box>{children}</Box>
        </Box>
      }
      {...props}
    >
      {PopoverTrigger}
    </StyledPopover>
  );
};
export const PopoverBody = (props: any) => {
  return (
    <Box
      mb={3}
      pt={3}
      px={3}
      borderTopWidth={1}
      borderTopColor="gray.3"
      {...props}
    />
  );
};
export const PopoverFooter = (props: any) => {
  return (
    <Box
      pb={3}
      pt={3}
      px={3}
      flexDirection="row"
      borderTopWidth={1}
      borderTopColor="gray.3"
      {...props}
    />
  );
};
export const PopoverCloseButton = (props: any) => {
  const { PopoverRef } = React.useContext(PopoverContext);

  return (
    <View
      style={{
        position: 'absolute',
        right: 2.5,
        top: 0,
        zIndex: 1,
      }}
    >
      <CloseButton
        size="lg"
        {...props}
        onClick={() => {
          PopoverRef?.current.toggleTooltip();
        }}
      />
    </View>
    // <></>
  );
};

export default React.forwardRef(Popover);
export type { IPopoverProps };
