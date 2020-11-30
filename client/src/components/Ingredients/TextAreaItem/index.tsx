import React from 'react';
import { TextArea } from './style';
import useTextAreaItem from './useTextAreaItem';

function TextAreaItem() {
  const { currentText, onChangeHandler } = useTextAreaItem();

  return <TextArea value={currentText} onChange={onChangeHandler} />;
}

export default TextAreaItem;
