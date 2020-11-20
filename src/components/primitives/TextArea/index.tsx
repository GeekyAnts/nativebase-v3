import React from 'react';
import { Input, IInputProps } from '../../primitives';
import { usePropsConfig } from '../../../theme';
export type ITextAreaProps = IInputProps & {
  totalLines?: number;
};

const TextArea = ({ totalLines, ...props }: ITextAreaProps, ref: any) => {
  const newProps = usePropsConfig('TextArea', props);
  return <Input {...newProps} numberOfLines={totalLines} ref={ref} />;
};

export default React.forwardRef(TextArea);
