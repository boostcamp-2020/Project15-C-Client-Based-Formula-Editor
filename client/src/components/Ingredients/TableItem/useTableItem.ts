import { RootState } from '@contexts/index';
import { useSelector } from 'react-redux';

const useTableAreaItem = () => {
  const { mathfield } = useSelector((state: RootState) => state.latex);

  const onChangeHandler = (latex: string) => {
    mathfield?.write(latex);
  };

  return { onChangeHandler };
};

export default useTableAreaItem;
