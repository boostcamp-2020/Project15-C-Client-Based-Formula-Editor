import { useSelector } from 'react-redux';
import { RootState } from '../../../contexts';

const useOutputFormula = () => {
  const { mathfield } = useSelector((state: RootState) => state.latex);

  const onClickHandler = () => {
    if (mathfield) mathfield.focus();
  };

  return {
    onClickHandler,
  };
};

export default useOutputFormula;
