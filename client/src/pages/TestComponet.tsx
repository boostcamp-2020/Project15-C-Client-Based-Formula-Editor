import React from 'react';
import styled from '@emotion/styled';
import { Dimmer, Loader, Segment, Image } from 'semantic-ui-react';

const Test = styled.div`
  height: 100%;
  & div {
    height: 100%;
  }
`;
const Test2 = styled.div`
  background: url(./image/giphy.gif);
  background-position: center;
  width: 400px;
  height: 150px;
  height: 100%;
`;
const Test3 = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const TestComponet = () => {
  console.log('hi');
  return (
    <Test3>
      <Test2 />
      <div>hihi</div>
    </Test3>
  );
  // return (
  //   <Test>
  //     <Segment>
  //       <Dimmer active>
  //         <Loader>Formula Chef</Loader>
  //       </Dimmer>
  //       <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  //     </Segment>
  //   </Test>
  // );
};
export default TestComponet;
