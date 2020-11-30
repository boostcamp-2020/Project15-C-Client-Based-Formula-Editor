import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { changeFontSize } from '@contexts/latex';
import * as S from './style';
interface FontListType {
  size: string;
  checked: boolean;
}
interface FontSizeProps {
  fontSizeHandler: () => void;
}
const sizeLists = [
  { size: '11', checked: false },
  { size: '15', checked: true },
  { size: '20', checked: false },
  { size: '25', checked: false },
  { size: '30', checked: false },
];

function FontSizeList({ fontSizeHandler }: FontSizeProps) {
  const dispatch = useDispatch();
  const [stateList, setStateList] = useState<FontListType[]>(sizeLists);
  const clickHandler = (index: number, fontSize: string) => {
    dispatch(changeFontSize(fontSize));
    fontSizeHandler();
    setStateList(
      stateList.map((item) => {
        if (item.checked) {
          item.checked = false;
        }
        return item;
      })
    );
    stateList[index].checked = true;
  };
  return (
    <S.FontContainer>
      {sizeLists.map((sizeList, index: number) => {
        return (
          <S.FontWapper
            key={index}
            onClick={() => {
              clickHandler(index, sizeList.size);
            }}
          >
            <span>{sizeList.size}</span>
            <span>{sizeList.checked && <Icon name="check" />}</span>
          </S.FontWapper>
        );
      })}
    </S.FontContainer>
  );
}

export default FontSizeList;
