import * as React from 'react';
import { render } from '@utils/test-util';
import FontColorMenu from '@ingredients/FontColorMenu';
import '@testing-library/jest-dom';

test('<FontColorMenu /> Test', () => {
  const { container } = render(<FontColorMenu />);

  expect(container).toHaveStyle(`
    background-color: '#000000',
  `);
});
