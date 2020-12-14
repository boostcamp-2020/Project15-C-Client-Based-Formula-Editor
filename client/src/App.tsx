import React, { useEffect } from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import MainPage from './pages/MainPage';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import useToggle from '@hooks/useToggle';
import styled from '@emotion/styled';
import { getToken } from '@utils/token';
import { API } from '@apis/common';
import { userLogin } from '@contexts/user';
import { useDispatch } from 'react-redux';

interface ExtensionProps {
  height: string;
  minHeight?: string;
}
const Extension = styled.div<ExtensionProps>`
  width: 100%;
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 10000;
  & iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  & iframe body {
    height: 100%;
  }
`;
function App() {
  const [toggle, onToggle] = useToggle(false);

  return (
    <Extension height={toggle ? '80px' : '35%'} minHeight={toggle ? '' : '200px'}>
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
                <MainPage toggle={toggle} onToggle={onToggle} />
              </CacheProvider>
            );
          }}
        </FrameContextConsumer>
      </Frame>
    </Extension>
  );
}

export default App;
