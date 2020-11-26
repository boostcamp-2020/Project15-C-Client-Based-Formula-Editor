import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editLatex, initLatex } from '../../../contexts/latex';
import { RootState } from '../../../contexts/index';
import { EditableMathField, MathField, StaticMathField } from 'react-mathquill';

function Content() {
  const dispatch = useDispatch();

  const { currentTab, totalLatex } = useSelector((state: RootState) => state.latex);
  const [mathfieldInput, setMathfieldInput] = useState<MathField | null>(null);
  const nowLatexInfo = totalLatex.filter((latex) => latex.id === currentTab)[0];

  const injectMathFunction = (latexString: any) => {
    if (mathfieldInput) {
      mathfieldInput.write(latexString);
    }
  };
  const initmathInput = (mathField: MathField) => {
    dispatch(initLatex(mathField));
    setMathfieldInput(mathField);
  };

  return (
    <div>
      <EditableMathField
        mathquillDidMount={initmathInput}
        latex={nowLatexInfo.latex} // latex value for the input field
        onChange={(mathField: MathField) => {
          dispatch(editLatex(mathField.latex()));
          // setLatex(mathField.latex());
          mathField.focus();
        }}
      />
      {/* <StaticMathField>{'\\lim _{\\combi{ }\\to \\combi{ }}^{ }\\combi{ }'}</StaticMathField> */}
      {/* <button onClick={() => injectMathFunction('\\sqrt{}')}>√</button>
      <button onClick={() => injectMathFunction('\\cos{}')}>cos</button>
      <button onClick={() => injectMathFunction('\\alpha')}>alpha</button>
      <button onClick={() => injectMathFunction('\\fleft( x \right)')}>func</button>
      <button onClick={() => injectMathFunction('\\iint{ }')}>int</button> */}
      <p>{nowLatexInfo.latex}</p>
    </div>
  );
}
export default Content;
