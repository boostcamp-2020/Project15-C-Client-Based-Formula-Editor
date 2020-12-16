import * as React from 'react';
import { render } from '../lib/utils/test-util';
import QrCode from '../components/Ingredients/QrCode/index';
import '@testing-library/jest-dom';

describe('<QrCode />', () => {
  it('renders QrCode', () => {
    const { container } = render(<QrCode imageUrl={'imgUrl'} />);
    expect(container).toMatchSnapshot();
  });
  it('in canvers', () => {
    const { container } = render(<QrCode imageUrl={'imgUrl'} />);
    expect(container.querySelector('canvas')).toBeInTheDocument;
    expect(container.querySelector('canvas')).toHaveStyle({
      width: '128px',
      height: '128px',
    });
  });
});
