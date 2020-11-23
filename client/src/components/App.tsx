import * as React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import Content from './Content';
interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = (props) => {
  const { name } = props;
  return (
    <Frame>
      <FrameContextConsumer>
        {({ document, window }) => {
          return <Content name={name} />;
        }}
      </FrameContextConsumer>
    </Frame>
  );
};

export default App;
