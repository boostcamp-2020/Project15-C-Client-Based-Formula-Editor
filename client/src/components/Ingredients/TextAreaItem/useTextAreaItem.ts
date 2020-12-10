import { useDispatch } from 'react-redux';
import { editLatex } from '../../../contexts/latex';
import useCurrentTab from '@hooks/useCurrentTab';
import { useCallback, useState } from 'react';
import { FORMULA_HEADER, LatexContent } from '@constants/latex-header';

const useTextAreaItem = () => {
  const dispatch = useDispatch();
  const { currentTabInfo } = useCurrentTab();
  const [isShow, setIsShow] = useState(false);
  const [recommend, setRecommend] = useState<LatexContent[]>([]);

  const clearAndCloseRecommend = useCallback(() => {
    setIsShow(false);
    setRecommend([]);
  }, []);

  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    if (e.key === 'Backspace' && target.value[target.value.length - 1] === '@') {
      return clearAndCloseRecommend();
    }

    if (e.key === 'Enter') return clearAndCloseRecommend();
    if (e.key === '@') {
      setIsShow(true);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isShow) {
      const startIndex = e.target.value.lastIndexOf('@') + 1;
      const word = e.target.value.substring(startIndex);
      const recommnedWords = FORMULA_HEADER.reduce<LatexContent[]>((acc, header) => {
        return acc.concat(header.content.filter((item) => item.latex.includes(word)));
      }, []);
      setRecommend(recommnedWords);
    }
    dispatch(editLatex({ latex: e.target.value }));
  };

  return { currentTabInfo, onChangeHandler, isShow, onKeyPress, recommend, clearAndCloseRecommend };
};

export default useTextAreaItem;
