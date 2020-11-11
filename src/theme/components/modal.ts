const sizes = {
  xs: {
    _width: '40%',
  },
  sm: {
    _width: '48%',
  },
  md: {
    _width: '60%',
  },
  lg: {
    _width: '75%',
  },
  xl: {
    _width: '90%',
  },
  full: {
    _width: '100%',
  },
};

const defaultProps = {
  modalOverlayStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    right: 0,
    bottom: 0,
  },
  modalCloseButtonStyle: {
    position: 'absolute',
    right: 2.5,
    top: 0,
    zIndex: 1,
  },
  modalCloseButtonProps: {
    size: 'lg',
  },
  modalProps: {
    width: '100%',
    height: '100%',
  },
  modalBodyProps: {
    mb: 3,
    px: 4,
  },
  modalContentProps: {
    bg: 'gray.1',
  },
  modalOverlayProps: {
    bg: 'black',
  },
  modalHeaderProps: {
    pb: 3,
    px: 3,
  },
  modalFooterProps: {
    px: 4,
    pb: 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
};

export default { defaultProps, sizes };
