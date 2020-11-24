import React, { useRef, useState } from 'react';
import { Header, Popup, Grid } from 'semantic-ui-react';
import FormulaContainer from './style';
// import * as ButtonImage from '../../../../public/image/math.svg';
import Button from '../../Materials/Button';
import { LATEX_HEADER, LatexHeader, LatexContent } from '../../../lib/constants/latex-header';
import styled from '@emotion/styled';

const Content = styled.div`
  display: none;
  background: gainsboro;
  width: 80%;
  margin: 20px auto;
  position: relative;
  height: 80px;
`;
const WhiteDiv = styled.div`
  width: 100%;
  position: fixed;
  top: 70px;
`;
function FormulaList() {
  const formulaRef = useRef<null | HTMLHeadingElement>(null);
  const [nowFormulas, setNowFormula] = useState<LatexContent[]>([]);
  const mouseHandler = (event: React.MouseEvent) => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'block';
    }
  };
  const leaveHandler = (event: React.MouseEvent) => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'none';
    }
  };
  document.body.addEventListener('mouseleave', () => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'none';
    }
  });
  return (
    <>
      <FormulaContainer>
        {LATEX_HEADER.map((latex) => (
          <Button latex={latex} onMouseOver={mouseHandler} setNowFormula={setNowFormula}></Button>
        ))}
      </FormulaContainer>
      <WhiteDiv onMouseLeave={leaveHandler}>
        <Content ref={formulaRef}>
          {nowFormulas.map((el) => {
            return (
              <>
                <img src={`image/${el.image}`} />
                <p>{el.latex}|</p>
              </>
            );
          })}
        </Content>
      </WhiteDiv>
    </>
  );
}

export default FormulaList;
