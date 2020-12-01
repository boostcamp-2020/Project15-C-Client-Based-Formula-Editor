import React from 'react';
import { TextArea } from './style';
import useTextAreaItem from './useTextAreaItem';

function TextAreaItem() {
  const { currentTabInfo, onChangeHandler } = useTextAreaItem();

  return <TextArea value={currentTabInfo.latex} onChange={onChangeHandler} />;
}

export default TextAreaItem;
