import { useDispatch } from 'react-redux';
import { editLatex } from '../../../contexts/latex';
import useCurrentTab from '@hooks/useCurrentTab';
import { useCallback, useState } from 'react';
import { FORMULA_HEADER, LatexContent } from '@constants/latex-header';
import { DISPLAY_INTERVAL } from '@constants/constants';
import useThrottle from '@hooks/useThrottle';
import useDebounce from '@hooks/useDebounce';

const useTextAreaItem = () => {
  const dispatch = useDispatch();
  const { currentTabInfo } = useCurrentTab();
  const [isShow, setIsShow] = useState(false);
  const [recommend, setRecommend] = useState<LatexContent[]>([]);
  const [maxNumber, setMaxNumber] = useState(DISPLAY_INTERVAL);

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

  const recommendLatex = (targetWord: string) => {
    const startIndex = targetWord.lastIndexOf('@') + 1;
    const word = targetWord.substring(startIndex);
    const recommnedWords = FORMULA_HEADER.reduce<LatexContent[]>((acc, header) => {
      return acc.concat(header.content.filter((item) => item.latex.includes(word)));
    }, []);
    setRecommend(recommnedWords);
  };

  const debouncedRecommendLatex = useDebounce<[string]>(recommendLatex, 200);

  const onChangeHandler = (size: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (size === 'big' && isShow) {
      debouncedRecommendLatex(e.target.value);
    }
    dispatch(editLatex({ latex: e.target.value }));
  };

  const onScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement;
    const scrollHeight = target.scrollHeight;
    const scrollTop = target.scrollTop;
    const clientHieght = target.clientHeight;

    if (scrollTop + clientHieght >= scrollHeight - 50 && maxNumber < recommend.length) {
      setMaxNumber((number) => number + DISPLAY_INTERVAL);
    }
  };

  const throttleOnScroll = useThrottle<[React.UIEvent<HTMLUListElement>]>(onScroll, 300);

  return {
    currentTabInfo,
    onChangeHandler,
    isShow,
    onKeyPress,
    recommend,
    clearAndCloseRecommend,
    maxNumber,
    onScroll: throttleOnScroll,
  };
};

export default useTextAreaItem;
