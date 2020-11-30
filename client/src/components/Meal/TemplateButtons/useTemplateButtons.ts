import { useDispatch } from 'react-redux';
import { editLatex } from '@contexts/latex';

const useTemplateButtons = () => {
  const dispatch = useDispatch();

  const clearOutput = () => {
    dispatch(editLatex(''));
  };

  return {
    clearOutput,
  };
};

export default useTemplateButtons;
