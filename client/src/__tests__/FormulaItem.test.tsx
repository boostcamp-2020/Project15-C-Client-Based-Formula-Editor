import * as React from 'react';
import { getByTestId, render, screen, waitFor } from '@testing-library/react';
import FormulaItem from '@ingredients/FormulaItem/index';
import '@testing-library/jest-dom';

describe('<FormulaItem />', () => {
  it('renders FormulaItem Component', () => {
    const latexInfo = { image: '/1/4.svg', latex: '\frac{\triangle y}{\triangle x}' };
    const hiddenFormula = () => {};
    const { container } = render(
      <FormulaItem latexInfo={latexInfo} hiddenFormula={hiddenFormula} />
    );
    expect(container).toBeVisible();
  });
});
