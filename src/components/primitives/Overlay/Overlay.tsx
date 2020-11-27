import React from 'react';
import { Box } from '../../primitives';
import { OverlayList, useOverlayManager, IOverlayProps } from './index';

export const OverlayContext = React.createContext({});

const Overlay = ({ ...props }) => {
  const [overlayState, setOverlayState] = React.useState(false);
  const [allOverlay] = useOverlayManager();
  console.log('allOverlay = ', allOverlay);

  // const holderStyle: any = {
  //   top: {
  //     top: 0,
  //     right: 0,
  //     left: 0,
  //   },
  //   bottom: {
  //     bottom: 0,
  //     right: 0,
  //     left: 0,
  //   },
  // };

  return (
    <OverlayContext.Provider value={setOverlayState}>
      {overlayState && (
        <Box
          position="absolute"
          top={0}
          right={0}
          left={0}
          bottom={0}
          backgroundColor="gray.500"
          opacity={0.5}
          {...props}
        />
      )}
      <Box
        position="absolute"
        top={0}
        right={0}
        left={0}
        // height={10}
        // backgroundColor="#FBB6CE"
      >
        <Box position="absolute" width="100%">
          <OverlayList
            placement="top-left"
            overlayList={allOverlay['top-left']}
          />
        </Box>
        <Box position="absolute" width="100%">
          <OverlayList placement="top" overlayList={allOverlay.top} />
        </Box>
        <Box position="absolute" width="100%">
          <OverlayList
            placement="top-right"
            overlayList={allOverlay['top-right']}
          />
        </Box>
      </Box>
      <Box
        position="absolute"
        bottom={0}
        right={0}
        left={0}
        // height={10}
        // backgroundColor="#a3bffa"
        // style={holderStyle.bottom}
        // justifyContent="flex-end"
        // // height={50}
        // zIndex={99999}
      >
        <Box position="absolute" width="100%">
          <OverlayList
            placement="bottom-left"
            overlayList={allOverlay['bottom-left']}
          />
        </Box>
        <Box position="absolute" width="100%">
          <OverlayList placement="bottom" overlayList={allOverlay.bottom} />
        </Box>
        <Box position="absolute" width="100%">
          <OverlayList
            placement="bottom-right"
            overlayList={allOverlay['bottom-right']}
          />
        </Box>
      </Box>
    </OverlayContext.Provider>
  );
};

export default Overlay;
