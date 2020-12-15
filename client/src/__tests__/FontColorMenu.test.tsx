import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import FontColorMenu from '../components/Ingredients/FontColorMenu';

describe('with bookmarkOnClick prop', () => {
  it('renders recent list item', () => {
    // const { container } = render(<FontColorMenu />);
    // fireEvent.change(container, { target: { value: '#000000' } });
    // expect(container).toHaveStyle({
    //   backgroundColor: '#000000',
    // });
  });
});

//   describe('without bookmarkOnClick prop', () => {
//     it('renders bookmark list item', () => {
//       const latex = '2+3';
//       const customOnClick = () => {};
//       const { container } = render(<ListItem {...{ latex, customOnClick }} />);
//       const buttons = container.querySelectorAll('button');

//       expect(container).toHaveTextContent(latex);
//       expect(buttons).toHaveLength(2);
//     });
//   });
