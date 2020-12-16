import * as React from 'react';
import { render } from '../lib/utils/test-util';
import PageTabItem from '../components/Ingredients/PageTabItem';
import '@testing-library/jest-dom';

describe('PageItem TEST', () => {
  const testInfo = {
    id: 0,
    latex: '\\frac',
    fontSize: '16',
    fontColor: 'black',
    textAlign: 'center',
  };

  test('PageItem title 테스트 ', () => {
    const { container } = render(<PageTabItem isCurrentTab={false} index={3} item={testInfo} />);

    expect(container).toHaveTextContent('수식 4');
  });
});
