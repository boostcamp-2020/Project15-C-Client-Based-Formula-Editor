import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextArea } from './style';
import { RootState } from '../../../contexts';
import { editLatex } from '../../../contexts/latex';

function TextAreaItem() {
  const dispatch = useDispatch();
  const { currentTab, totalLatex } = useSelector((state: RootState) => state.latex);
  const currentText = totalLatex.filter((tabinfo) => tabinfo.id === currentTab)[0].latex;

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(editLatex(e.target.value));
  };

  return <TextArea value={currentText} onChange={onChangeHandler} />;
}

export default TextAreaItem;
