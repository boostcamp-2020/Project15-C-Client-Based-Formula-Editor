import { useState, useCallback } from 'react';

const useSelect = (
  initialValue: string
): [
  string,
  (event: React.ChangeEvent<HTMLSelectElement>) => void,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event) => {
    // eslint-disable-next-line no-shadow
    setValue(event.target.value);
  }, []);

  return [value, onChange, setValue];
};

export default useSelect;
