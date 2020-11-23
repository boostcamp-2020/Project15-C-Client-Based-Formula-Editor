import * as React from 'react';

interface ContentProps {
  name: string;
}

const Content: React.FC<ContentProps> = (props) => {
  const { name } = props;
  const style = {
    textAlign: 'center' as const,
  };
  return (
    <div style={style}>
      <h1>{name}의 확장 프로그램</h1>
      <span>확장 프로그램을 연동해보는 프로젝트 입니다.</span>
    </div>
  );
};

export default Content;
