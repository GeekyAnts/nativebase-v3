import React from 'react';
import { Input, IInputProps } from '../../primitives';
import { usePropsConfig } from '../../../theme';
import type { TextInput } from 'react-native';
export type ITextAreaProps = IInputProps & {
  totalLines?: number;
};

const TextArea = ({ totalLines, ...props }: ITextAreaProps, ref: any) => {
  const newProps = usePropsConfig('TextArea', props);
  return <Input {...newProps} numberOfLines={totalLines} ref={ref} />;
};

export default React.forwardRef<TextInput, ITextAreaProps>(TextArea);
