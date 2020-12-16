import * as React from 'react';
import { render } from '../lib/utils/test-util';
import '@testing-library/jest-dom';
import DictionaryItem from '@ingredients/DictionaryItem';

describe('DictionaryItem TEST', () => {
  test('DictionaryItem Rendering 테스트 ', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <DictionaryItem latex={'\\sqrt'} />
          </tr>
        </tbody>
      </table>
    );
    const dictionaryItem = container.querySelector('td');
    const stataicMathField = container.querySelector('span');

    expect(dictionaryItem).not.toBeEmptyDOMElement();
    expect(stataicMathField).toBeInTheDocument();
  });
});
