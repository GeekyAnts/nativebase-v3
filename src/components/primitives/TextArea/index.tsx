import React from 'react';
import { Input, IInputProps } from '../../primitives';
import { usePropsConfig } from '../../../theme';
export type ITextAreaProps = IInputProps & {
  totalLines?: number;
};

const TextArea = ({ totalLines, ...props }: ITextAreaProps) => {
  const newProps = usePropsConfig('TextArea', props);
  return <Input {...newProps} numberOfLines={totalLines} />;
};

export default TextArea;
