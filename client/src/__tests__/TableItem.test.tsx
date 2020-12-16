import * as React from 'react';
import { render } from '../lib/utils/test-util';
import TableItem from '../components/Ingredients/TableItem/index';
import '@testing-library/jest-dom';

describe('<TableItem />', () => {
  const data = [{ id: 1, latex: '1+1', title: '나의 latex' }];
  it('renders TableItem', () => {
    const { container } = render(
      <TableItem headerTitle={'title'} headerLatex={'latex'} data={data} />
    );
    expect(container).toMatchSnapshot();
  });
  it('in Table', () => {
    const { container, getByText } = render(
      <TableItem headerTitle={'title'} headerLatex={'latex'} data={data} />
    );
    expect(container.querySelector('table')).toBeInTheDocument;
    const header = getByText('title');
    expect(header).toBeInTheDocument;
    const content = getByText('latex');
    expect(content).toBeInTheDocument;
  });
});
