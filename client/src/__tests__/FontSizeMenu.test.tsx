import * as React from 'react';
import { render } from '@utils/test-util';
import FontSizeMenu from '@ingredients/FontSizeMenu';
import { FONT_SIZE_LISTS } from '@constants/constants';
import '@testing-library/jest-dom';

test('<FontSizeMenu /> Test', () => {
  const toggleSzieMenu = () => {};
  const { container } = render(<FontSizeMenu toggleSizeMenu={toggleSzieMenu} />);

  FONT_SIZE_LISTS.forEach(({ size, checked }) => {
    expect(container).toHaveTextContent(size);
    if (size === '15') {
      expect(checked).toBeTruthy();
    } else {
      expect(checked).toBeFalsy();
    }
  });
});
