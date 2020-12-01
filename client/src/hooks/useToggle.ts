import { useState } from 'react';

const useToggle = (
  initialValue: boolean
): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [value, setValue] = useState(initialValue);

  const onToggle = () => {
    // eslint-disable-next-line no-shadow
    setValue((value) => !value);
  };

  return [value, onToggle, setValue];
};

export default useToggle;
