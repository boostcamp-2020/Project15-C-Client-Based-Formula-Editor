import { useState } from 'react';

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);

  const onToggle = () => {
    setValue((value) => !value);
  };

  return [value, onToggle];
};

export default useToggle;
