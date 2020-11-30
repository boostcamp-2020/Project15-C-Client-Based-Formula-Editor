import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { changeFontSize } from '@contexts/latex';
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
export const FontContainer = styled.div`
  margin: 0;
  padding: 0;
  border: 1px solid red;
  position: absolute;
  width: 70px;
  margin-top: 35px;
  background: white;
  z-index: 99999;
`;

export const FontWapper = styled.div`
  display: flex;
  border: 1px solid red;
  color: red;
  font-size: 14px;
  padding: 5px 2px 5px 7px;
  text-align: left;
  z-index: 99999;
  span {
    background: white;
  }
`;

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
    <FontContainer>
      {sizeLists.map((sizeList, index: number) => {
        return (
          <FontWapper
            key={index}
            onClick={() => {
              clickHandler(index, sizeList.size);
            }}
          >
            <span>{sizeList.size}</span>
            <span>{sizeList.checked && <Icon name="check" />}</span>
          </FontWapper>
        );
      })}
    </FontContainer>
  );
}

export default FontSizeList;
