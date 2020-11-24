import * as React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import MainPage from './pages/MainPage';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
// Todo : 나중에 수정 필요 !
import '../public/root.css';

function App() {
  return (
    <div id="my-extension">
      <Frame
        head={[
          // <link type="text/css" rel="stylesheet" href={chrome.runtime.getURL('/content.css')}></link>,
          <link type="text/css" rel="stylesheet" href={'content.css'} key={1}></link>,
        ]}
      >
        <FrameContextConsumer>
          {({ document, window }) => {
            const cache = createCache({
              key: 'head',
              container: document.head,
            });
            return (
              <CacheProvider value={cache}>
                <MainPage />
              </CacheProvider>
            );
          }}
        </FrameContextConsumer>
      </Frame>
    </div>
  );
}

export default App;
