import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ButtonItem from '../components/Ingredients/ButtonItem/index';
import '@testing-library/jest-dom';

/*
 title?: string;
  icon?: any;
  size?: 'big' | 'small' | 'mini' | 'tiny' | 'medium' | 'large' | 'huge' | 'massive' | undefined;
  handler: () => void;
  color?: any;
*/
test('간단한 Buttomitem ', () => {
  const { container } = render(<ButtonItem title={'제목'} handler={() => {}} />);

  expect(container).toHaveTextContent('제목');
});
