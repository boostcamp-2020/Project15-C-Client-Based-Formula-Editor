import * as React from 'react';
import { getByTestId, render, screen, waitFor } from '@testing-library/react';
import IconMessage from '@ingredients/IconMessage/index';
import '@testing-library/jest-dom';

describe('<IconMessage />', () => {
  it('renders IconMessage Component', () => {
    const downloadImage = () => {};
    const { container } = render(
      <IconMessage
        title={'이미지 저장'}
        iconName={'image'}
        size={'massive'}
        onClickHandler={downloadImage}
      />
    );
    const test = screen.getByTestId('icon-message');
    expect(test).toHaveClass('css-0');
    expect(test).toBeVisible();
  });
});
