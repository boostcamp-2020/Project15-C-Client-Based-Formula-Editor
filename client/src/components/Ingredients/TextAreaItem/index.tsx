import React from 'react';
import { TextArea } from './style';
import useTextAreaItem from './useTextAreaItem';

export interface TextAreaItemProps {
  width: string;
}
function TextAreaItem({ width }: TextAreaItemProps) {
  const { currentTabInfo, onChangeHandler } = useTextAreaItem();

  return <TextArea value={currentTabInfo.latex} onChange={onChangeHandler} width={width} />;
}

export default TextAreaItem;
