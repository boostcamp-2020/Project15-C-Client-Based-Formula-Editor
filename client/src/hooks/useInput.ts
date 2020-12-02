import { useState, useCallback } from 'react';

const useInput = (
  initialValue: string
): [string, (event: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [input, setInput] = useState(initialValue);

  const onChange = useCallback((event) => {
    // eslint-disable-next-line no-shadow
    setInput(event.target.value);
  }, []);

  const clearInput = (): void => {
    setInput('');
  };

  return [input, onChange, clearInput];
};

export default useInput;
