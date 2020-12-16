import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TextAreaItem from '../components/Ingredients/TextAreaItem/index';
import '@testing-library/jest-dom';

describe('<TextAreaItem />', () => {
  it('renders TextAreaItem', () => {
    const { container } = render(<TextAreaItem size={'big'} />);
    expect(container).toMatchSnapshot();
  });
});
