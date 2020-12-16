import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Loading from '../components/Ingredients/Loading';
import '@testing-library/jest-dom';

describe('Loading TEST', () => {
  test('Loading big 테스트 ', () => {
    const { container } = render(<Loading size={'big'} />);

    expect(container).toHaveTextContent('수식 셰프');
    expect(document.querySelector('.pencil')).toBeInTheDocument();
    expect(document.querySelector('.pencil')).toHaveStyle({
      width: '180px',
    });
    expect(document.querySelector('.top')).toBeInTheDocument();
    expect(document.querySelector('.stroke_big')).toBeInTheDocument();
  });

  test('Loading mini 테스트 ', () => {
    const { container } = render(<Loading size={'mini'} />);

    expect(container).toHaveTextContent('수식 셰프');
    expect(document.querySelector('.pencil')).toBeInTheDocument();
    expect(document.querySelector('.pencil')).toHaveStyle({
      width: '100px',
    });
    expect(document.querySelector('.top')).toBeInTheDocument();
    expect(document.querySelector('.stroke_mini')).toBeInTheDocument();
  });
});
