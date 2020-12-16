import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlertItem from '@ingredients/AlertItem';
import { AlertMessage } from '@constants/constants';

describe('AlertItem TEST', () => {
  test('AlertItem Rendering TEST', () => {
    const { container } = render(
      <AlertItem icon={'star'} message={AlertMessage.NEED_LOGIN_MESSAGE} />
    );

    expect(container).toHaveTextContent(AlertMessage.NEED_LOGIN_MESSAGE);
    expect(container).not.toBeEmptyDOMElement();
  });

  test('AlertItem > MessageBox Style TEST', () => {
    const { container } = render(
      <AlertItem icon={'star'} message={AlertMessage.NO_LIST_MESSAGE} />
    );
    const messageBox = container.querySelector('.globalFont');

    expect(messageBox).toHaveStyle({
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
    });
  });
});
