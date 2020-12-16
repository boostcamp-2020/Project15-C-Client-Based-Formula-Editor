import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TableItem from '../components/Ingredients/TableItem/index';
import '@testing-library/jest-dom';

describe('<TableItem />', () => {
  it('renders TableItem', () => {
    const data = [{ id: 1, latex: '1+1', title: '나의 latex' }];
    const { container } = render(
      <TableItem headerTitle={'title'} headerLatex={'latex'} data={data} />
    );
    expect(container).toMatchSnapshot();
  });
});
