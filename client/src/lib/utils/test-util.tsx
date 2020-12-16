import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import reducer, { RootState } from '../../contexts';

function render(
  ui: React.ReactElement,
  {
    initialState = {
      latex: {
        maxId: 0,
        currentTab: 0,
        totalLatex: [
          {
            id: 0,
            latex: '',
            fontSize: '15',
            fontColor: '#000000',
            textAlign: 'left',
          },
        ],
        mathfield: null,
        mathfieldRef: null,
      },
      user: {
        loading: false,
        error: null,
        userInfo: {
          userId: null,
          favoriteLists: [],
        },
      },
    },
    store = createStore(reducer, initialState),
  }: { initialState?: RootState; store?: Store } = { initialState: undefined, store: undefined }
) {
  function Wrapper({ children }: { children?: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
