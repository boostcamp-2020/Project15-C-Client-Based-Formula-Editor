import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editLatex } from '../../../contexts/latex';
import { RootState } from '../../../contexts/index';
import { EditableMathField, MathField } from 'react-mathquill';

function Content() {
  const { currentTab, totalLatex } = useSelector((state: RootState) => state.latex);
  const dispatch = useDispatch();

  const [latex, setLatex] = useState('');
  const [mathfieldInput, setMathfieldInput] = useState<MathField | string>('');

  const injectMathFunction = (latexString: any) => {
    if (typeof mathfieldInput !== 'string') {
      mathfieldInput.write(latexString);
    }
  };
  const initmathInput = (mathField: MathField) => {
    setMathfieldInput(mathField);
  };
  return (
    <div>
      <EditableMathField
        mathquillDidMount={initmathInput}
        latex={latex} // latex value for the input field
        onChange={(mathField: MathField) => {
          dispatch(editLatex(mathField.latex()));
          // setLatex(mathField.latex());
          mathField.focus();
        }}
      />
      <button onClick={() => injectMathFunction('\\sqrt{}')}>√</button>
      <button onClick={() => injectMathFunction('\\cos{}')}>cos</button>
      <button onClick={() => injectMathFunction('\\alpha')}>alpha</button>
      <button onClick={() => injectMathFunction('\\fleft( x \right)')}>func</button>
      <button onClick={() => injectMathFunction('\\int{}{}')}>int</button>
      <p>{totalLatex[+currentTab - 1].latex}</p>
    </div>
  );
}
export default Content;
