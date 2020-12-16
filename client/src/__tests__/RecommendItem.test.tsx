/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import RecommendItem from '../components/Ingredients/RecommendItem/index';
import '@testing-library/jest-dom';

describe('<RecommendItem />', () => {
  it('renders RecommendItem', () => {
    const { container } = render(
      <RecommendItem
        latex={'latex'}
        image={'imgUrl'}
        currentLatex={'currentLatex'}
        clearAndCloseRecommend={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
