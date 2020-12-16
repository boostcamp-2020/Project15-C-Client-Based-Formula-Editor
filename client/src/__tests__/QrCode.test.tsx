import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import QrCode from '../components/Ingredients/QrCode/index';
import '@testing-library/jest-dom';

describe('<QrCode />', () => {
  it('renders QrCode', () => {
    const { container } = render(<QrCode imageUrl={'imgUrl'} />);
    expect(container).toMatchSnapshot();
  });
});
