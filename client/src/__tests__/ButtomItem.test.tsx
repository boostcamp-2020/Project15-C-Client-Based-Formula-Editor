/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonItem from '@ingredients/ButtonItem';

describe('Buttomitem TEST', () => {
  test('Buttomitem Rendering TEST ', () => {
    const { container } = render(<ButtonItem title={'제목'} icon={'star'} handler={() => {}} />);

    expect(container).toHaveTextContent('제목');
    expect(container).not.toBeEmptyDOMElement();
  });
});
