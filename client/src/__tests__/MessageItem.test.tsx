import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MessageItem from '../components/Ingredients/MessageItem';
import '@testing-library/jest-dom';

describe('MessageItem TEST', () => {
  test('MessageItem title 테스트 ', () => {
    const { container } = render(<MessageItem title={'MessageItem'} positive={true} />);

    expect(container).toHaveTextContent('MessageItem');
  });

  test('MessageItem children 테스트 ', () => {
    const { container } = render(
      <MessageItem title={'MessageItem'} positive={false}>
        <div>테스트 중</div>
      </MessageItem>
    );

    expect(container).toHaveTextContent('MessageItem');
    expect(document.querySelector('div')).toBeInTheDocument();
    expect(container).toHaveTextContent('테스트 중');
  });
});
