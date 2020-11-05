import React from 'react';
import { Input, IInputBoxProps } from '../../..';
import { usePropsConfig } from '../../../theme';
export type ITextAreaProps = IInputBoxProps & {
  totalLines?: number;
};

const TextArea = ({ totalLines, ...props }: ITextAreaProps) => {
  const newProps = usePropsConfig('TextArea', props);
  return <Input {...newProps} numberOfLines={totalLines} />;
};

export default TextArea;
