import * as React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import Content from './Content';
interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = (props) => {
  const { name } = props;
  return (
    <Frame
      head={[
        <link type="text/css" rel="stylesheet" href={chrome.runtime.getURL('/content.css')}></link>,
      ]}
    >
      <FrameContextConsumer>
        {({ document, window }) => {
          return <Content />;
        }}
      </FrameContextConsumer>
    </Frame>
  );
};

export default App;
