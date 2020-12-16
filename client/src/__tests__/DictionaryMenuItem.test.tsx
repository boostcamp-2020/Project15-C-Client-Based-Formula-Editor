import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DictionaryMenuItem from '@ingredients/DictionaryMenuItem';

describe('DictionaryMenuItem TEST', () => {
  test('DictionaryMenuItem Rendering TEST ', () => {
    const { container } = render(<DictionaryMenuItem title={'옵션제목'} />);
    const dictionaryMenuItem = container.querySelector('option');

    expect(dictionaryMenuItem).toHaveTextContent('옵션제목');
    expect(dictionaryMenuItem).not.toHaveAttribute('selected', true);
    expect(dictionaryMenuItem).toHaveStyle({
      fontSize: '12px',
      height: '15px',
    });
  });
});
