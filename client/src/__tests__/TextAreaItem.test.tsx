import * as React from 'react';
import { render } from '../lib/utils/test-util';
import TextAreaItem from '../components/Ingredients/TextAreaItem/index';
import '@testing-library/jest-dom';

describe('<TextAreaItem />', () => {
  it('renders TextAreaItem', () => {
    const { container } = render(<TextAreaItem size={'big'} />);
    expect(container).toMatchSnapshot();
  });
  it('in TextAreaItem', () => {
    const { container } = render(<TextAreaItem size={'big'} />);
    expect(container.querySelector('textarea')).toBeInTheDocument;
    expect(container.querySelector('textarea')).toHaveStyle({
      height: '100%',
    });
  });
});
