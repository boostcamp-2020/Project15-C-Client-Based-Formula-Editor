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
        id="iframe"
        head={[
          <link
            key={1}
            type="text/css"
            rel="stylesheet"
            href={
              process.env.NODE_ENV === 'development'
                ? 'content.css'
                : chrome.runtime.getURL('/content.css')
            }
          ></link>,
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
            key={3}
          />,
          <link rel="preconnect" href="https://fonts.gstatic.com" key={5} />,
          <link
            key={6}
            href="https://fonts.googleapis.com/css2?family=Jua&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          ></link>,
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
