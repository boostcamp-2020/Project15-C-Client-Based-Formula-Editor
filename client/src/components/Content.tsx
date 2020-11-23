import React, { useState } from 'react';
import { EditableMathField, MathField, addStyles } from 'react-mathquill';
function Content() {
  addStyles();
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
    <div style={{ marginTop: 50, marginLeft: 30 }}>
      <EditableMathField
        mathquillDidMount={initmathInput}
        latex={latex} // latex value for the input field
        onChange={(mathField) => {
          setLatex(mathField.latex());
          mathField.focus();
        }}
      />
      <button onClick={() => injectMathFunction('\\sqrt{}')}>√</button>
      <button onClick={() => injectMathFunction('\\cos{}')}>cos</button>
      <button onClick={() => injectMathFunction('\\alpha')}>alpha</button>
      <button onClick={() => injectMathFunction('\\fleft( x \right)')}>func</button>
      <button onClick={() => injectMathFunction('\\int{}{}')}>int</button>
      <p>{latex}</p>
    </div>
  );
}
export default Content;
