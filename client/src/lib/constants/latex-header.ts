/* eslint-disable no-useless-escape */
interface LatexHeader {
  header: string;
  content: LatexContent[];
}

interface LatexContent {
  image: string;
  latex: string | any;
}
const FORMULA_HEADER: LatexHeader[] = [
  {
    header: `1-btn.svg`,
    content: [
      {
        image: `/1/1.svg`,
        latex: `\\frac{ }{ }`,
      },
      {
        image: `/1/2.svg`,
        latex: `/`,
      },
      {
        image: `/1/3.svg`,
        latex: `\\frac{dy}{dx}`,
      },
      {
        image: `/1/4.svg`,
        latex: `\\frac{\\triangle y}{\\triangle x}`,
      },
    ],
  },
  {
    header: `2-btn.svg`,
    content: [
      {
        image: `/2/1.svg`,
        latex: `\\sqrt{ }`,
      },
      {
        image: `/2/2.svg`,
        latex: `\\sqrt[]{}`,
      },
      {
        image: `/2/3.svg`,
        latex: `\\sqrt{\\frac{ }{ }}`,
      },
      {
        image: `/2/4.svg`,
        latex: `\\frac{\\sqrt{ }}{\\sqrt{ }}`,
      },
    ],
  },
  {
    header: `3-btn.svg`,
    content: [
      {
        image: `/3/1.svg`,
        latex: `\\combi{ }^{ }`,
      },
      {
        image: `/3/2.svg`,
        latex: `\\combi{ }_{ }`,
      },
      {
        image: `/3/3.svg`,
        latex: `\\combi{ }_{ }^{ }`,
      },
      {
        image: `/3/4.svg`,
        latex: `\\combi{\\ }_{ }^{ }\\combi{ }`,
      },
      {
        image: `/3/5.svg`,
        latex: `\\combi{\\ }_{ }\\combi{ }_{ }`,
      },
      {
        image: `/3/6.svg`,
        latex: `\\combi{\\ }_{ }^{ }\\combi{ }_{ }^{ }`,
      },
      {
        image: `/3/7.svg`,
        latex: `A^c`,
      },
      {
        image: `/3/8.svg`,
        latex: `x^2`,
      },
      {
        image: `/3/9.svg`,
        latex: `\\left(\\right)^2`,
      },
      {
        image: `/3/10.svg`,
        latex: `\\left(\\frac{ }{ }\\right)^2`,
      },
      {
        image: `/3/11.svg`,
        latex: `\\frac{1}{\\combi{ }^{ }}`,
      },
      {
        image: `/3/12.svg`,
        latex: `\\frac{\\combi{ }^{ }}{\\combi{ }^{ }}`,
      },
    ],
  },
  {
    header: `4-btn.svg`,
    content: [
      {
        image: `/4/1.svg`,
        latex: `\\int _{\\ }^{\\ }`,
      },
      {
        image: `/4/2.svg`,
        latex: `\\int _{ }^{ }`,
      },
      {
        image: `/4/3.svg`,
        latex: `\\iint _{\\ }^{\\ }`,
      },
      {
        image: `/4/4.svg`,
        latex: `\\iint _{ }^{ }`,
      },
      {
        image: `/4/5.svg`,
        latex: `\\oint _{\\ }^{\\ }`,
      },
      {
        image: `/4/6.svg`,
        latex: `\\oint _{ }^{ }`,
      },
      {
        image: `/4/7.svg`,
        latex: `\\oiint _{\\ }^{\\ }`,
      },
      {
        image: `/4/8.svg`,
        latex: `\\oiint _{ }^{ }`,
      },
      {
        image: `/4/9.svg`,
        latex: `\\oiiint _{\\ }^{\\ }`,
      },
      {
        image: `/4/10.svg`,
        latex: `\\oiiint _{ }^{ }`,
      },
      {
        image: `/4/11.svg`,
        latex: `\\left\\lceil \\right\\rceil _{ }^{ }`,
      },
      {
        image: `/4/12.svg`,
        latex: `\\frac{dy}{dx}`,
      },
      {
        image: `/4/13.svg`,
        latex: `\\frac{\\triangle y}{\\triangle x}`,
      },
      {
        image: `/4/14.svg`,
        latex: `\\int _{\\ }^{\\ }f\\left(x\\right)dx}`,
      },
      {
        image: `/4/15.svg`,
        latex: `\\frac{d}{dx}\\int _a^sf\\left(t\\right)dt`,
      },
    ],
  },
  {
    header: `5-btn.svg`,
    content: [
      {
        image: `/5/1.svg`,
        latex: `\\sum _{\\ }^{\\ }`,
      },
      {
        image: `/5/2.svg`,
        latex: `\\sum _{ }^{ }`,
      },
      {
        image: `/5/3.svg`,
        latex: `\\prod _{\\ }^{\\ }`,
      },
      {
        image: `/5/4.svg`,
        latex: `\\prod _{ }^{ }`,
      },
      {
        image: `/5/5.svg`,
        latex: `\\bigcup _{\\ }^{\\ }`,
      },
      {
        image: `/5/6.svg`,
        latex: `\\bigcup _{ }^{ }`,
      },
      {
        image: `/5/7.svg`,
        latex: `\\bigcap _{\\ }^{\\ }`,
      },
      {
        image: `/5/8.svg`,
        latex: `\\bigcap _{ }^{ }`,
      },
      {
        image: `/5/9.svg`,
        latex: `\\bigvee _{\\ }^{\\ }`,
      },
      {
        image: `/5/10.svg`,
        latex: `\\bigvee _{ }^{ }`,
      },
      {
        image: `/5/11.svg`,
        latex: `\\bigwedge _{\\ }^{\\ }`,
      },
      {
        image: `/5/12.svg`,
        latex: `\\bigwedge _{ }^{ }`,
      },
      {
        image: `/5/13.svg`,
        latex: `\\sum _{i=0}^n`,
      },
      {
        image: `/5/14.svg`,
        latex: `\\sum _{k=1}^n`,
      },
      {
        image: `/5/15.svg`,
        latex: `\\sum _{k=1}^{\\infty }`,
      },
      {
        image: `/5/16.svg`,
        latex: `\\sum _{k=1}^{\\infty }\\left(\\frac{1}{n}\\right)^n`,
      },
      {
        image: `/5/17.svg`,
        latex: `\\sum _{k=1}^{\\infty }\\log `,
      },
    ],
  },
  {
    header: `6-btn.svg`,
    content: [
      {
        image: `/6/1.svg`,
        latex: `\\left(\\combi{ }\\right)`,
      },
      {
        image: `/6/2.svg`,
        latex: `\\left[\\combi{ }\\right]`,
      },
      {
        image: `/6/3.svg`,
        latex: `\\left\{\\combi{ }\\right\\}`,
      },
      {
        image: `/6/4.svg`,
        latex: `<\\combi{ }>`,
      },
      {
        image: `/6/5.svg`,
        latex: `\\left\\lfloor \\combi{ }\\right\\rfloor `,
      },
      {
        image: `/6/6.svg`,
        latex: `\\left\\lceil \\combi{ }\\right\\rceil `,
      },
      {
        image: `/6/7.svg`,
        latex: `\\left|\\combi{ }\\right|`,
      },
      {
        image: `/6/8.svg`,
        latex: `\\left|\\left|\\combi{ }\\right|\\right|`,
      },
      {
        image: `/6/9.svg`,
        latex: `[[\\combi{ }]]`,
      },
      {
        image: `/6/10.svg`,
        latex: `\\left(\\combi{ }|\\combi{ }\\right)`,
      },
      {
        image: `/6/11.svg`,
        latex: `\\left\\{\\combi{ }|\\combi{ }\\right\\}`,
      },
      {
        image: `/6/12.svg`,
        latex: `<\\combi{ }|\\combi{ }>`,
      },
      {
        image: `/6/13.svg`,
        latex: `<\\combi{ }|\\combi{ }|\\combi{ }>`,
      },
      {
        image: `/6/14.svg`,
        latex: `\\left|x\\right|`,
      },
      {
        image: `/6/15.svg`,
        latex: `\\left|f(x)\\right|`,
      },
      {
        image: `/6/16.svg`,
        latex: `f\\left(\\left|x\\right|\\right)`,
      },
      {
        image: `/6/17.svg`,
        latex: `\\left[\\right]_a^b`,
      },
    ],
  },
  {
    header: `7-btn.svg`,
    content: [
      {
        image: `/7/1.svg`,
        latex: `f(x)`,
      },
      {
        image: `/7/2.svg`,
        latex: `g(x)`,
      },
      {
        image: `/7/3.svg`,
        latex: `h(x)`,
      },
      {
        image: `/7/4.svg`,
        latex: `f^{ }\\left(x\\right)`,
      },
      {
        image: `/7/5.svg`,
        latex: `g^{ }\\left(x\\right)`,
      },
      {
        image: `/7/6.svg`,
        latex: `h^{ }\\left(x\\right)`,
      },
      {
        image: `/7/7.svg`,
        latex: `\\sin `,
      },
      {
        image: `/7/8.svg`,
        latex: `\\cos `,
      },
      {
        image: `/7/9.svg`,
        latex: `\\tan `,
      },
      {
        image: `/7/10.svg`,
        latex: `\\csc`,
      },
      {
        image: `/7/11.svg`,
        latex: `\\sec`,
      },
      {
        image: `/7/12.svg`,
        latex: `\\cot `,
      },
      {
        image: `/7/13.svg`,
        latex: `\\sin ^{ }`,
      },
      {
        image: `/7/14.svg`,
        latex: `\\cos ^{ }`,
      },
      {
        image: `/7/15.svg`,
        latex: `\\tan ^{ }`,
      },
      {
        image: `/7/16.svg`,
        latex: `\\csc ^{ }`,
      },
      {
        image: `/7/17.svg`,
        latex: `\\sec ^{ }`,
      },
      {
        image: `/7/18.svg`,
        latex: `\\cot ^{ }`,
      },
      {
        image: `/7/19.svg`,
        latex: `\\left(f\\circ g\\right)\\left(x\\right)`,
      },
      {
        image: `/7/20.svg`,
        latex: `\\left(f\\circ f\\right)\\circ f`,
      },
      {
        image: `/7/21.svg`,
        latex: `f^{-1}`,
      },
      {
        image: `/7/22.svg`,
        latex: `\\left(f^{-1}\\right)^{-1}`,
      },
      {
        image: `/7/23.svg`,
        // Todo f'\left(x\right) => f\'\left(x\right)
        // Todo 백틱으로 표현
        latex: `f'\\left(x\\right)`,
      },
      {
        image: `/7/24.svg`,
        latex: `\\sin \\theta `,
      },
      {
        image: `/7/25.svg`,
        latex: `\\cos \\theta `,
      },
      {
        image: `/7/26.svg`,
        latex: `\\tan \\theta `,
      },
    ],
  },
  {
    header: `8-btn.svg`,
    content: [
      {
        image: `/8/1.svg`,
        latex: `\\dot{ }`,
      },
      {
        image: `/8/2.svg`,
        latex: `\\ddot{ }`,
      },
      {
        image: `/8/3.svg`,
        latex: `\\dddot{ }`,
      },
      {
        image: `/8/4.svg`,
        latex: `\\hat{ }`,
      },
      {
        image: `/8/5.svg`,
        latex: `\\check{ }`,
      },
      {
        image: `/8/6.svg`,
        latex: `\\acute{ }`,
      },
      {
        image: `/8/7.svg`,
        latex: `\\grave{ }`,
      },
      {
        image: `/8/8.svg`,
        latex: `\\breve{ }`,
      },
      {
        image: `/8/9.svg`,
        latex: `\\tilde{ }`,
      },
      {
        image: `/8/10.svg`,
        latex: `\\overline { }`,
      },
      {
        image: `/8/11.svg`,
        latex: `\\bbar{ }`,
      },
      {
        image: `/8/12.svg`,
        latex: `\\overbrace{ }{\\ }`,
      },
      {
        image: `/8/13.svg`,
        latex: `\\underbrace{\\ }{ }`,
      },
      {
        image: `/8/14.svg`,
        latex: `\\overbrace{ }{ }`,
      },
      {
        image: `/8/15.svg`,
        latex: `\\underbrace{ }{ }`,
      },
      {
        image: `/8/16.svg`,
        latex: `\\overleftarrow{ }`,
      },
      {
        image: `/8/17.svg`,
        latex: `\\overrightarrow{ }`,
      },
      {
        image: `/8/18.svg`,
        latex: `\\overleftrightarrow{ }`,
      },
      {
        image: `/8/19.svg`,
        latex: `\\overleftharpoonup{ }`,
      },
      {
        image: `/8/20.svg`,
        latex: `\\overrightharpoonup{ }`,
      },
      {
        image: `/8/21.svg`,
        latex: `\\overline { }`,
      },
      {
        image: `/8/22.svg`,
        latex: `\\underline { }`,
      },
      {
        image: `/8/23.svg`,
        latex: `\\boxed{ }`,
      },
      {
        image: `/8/24.svg`,
        latex: `\\overline {AB}`,
      },
      {
        image: `/8/25.svg`,
        latex: `\\overline {X}`,
      },
      {
        image: `/8/26.svg`,
        latex: `\\overrightarrow{AB}`,
      },
    ],
  },
  {
    header: `9-btn.svg`,
    content: [
      {
        image: `/9/1.svg`,
        latex: `\\log _{ }\\combi{ }`,
      },
      {
        image: `/9/2.svg`,
        latex: `\\log \\combi{ }`,
      },
      {
        image: `/9/3.svg`,
        latex: `\\ln \\combi{ }`,
      },
      {
        image: `/9/4.svg`,
        latex: `\\lim _{ }^{ }\\combi{ }`,
      },
      {
        image: `/9/5.svg`,
        latex: `\\lim _{\\combi{ }\\to \\combi{ }}^{ }\\combi{ }`,
      },
      {
        image: `/9/6.svg`,
        latex: `\\min _{ }^{ }\\combi{ }`,
      },
      {
        image: `/9/7.svg`,
        latex: `\\max _{ }^{ }\\combi{ }`,
      },
      {
        image: `/9/8.svg`,
        latex: `a^{\\log _bx}`,
      },
      {
        image: `/9/9.svg`,
        latex: `\\lim _{n\\to \\infty }^{ }\\combi{ }`,
      },
      {
        image: `/9/10.svg`,
        latex: `\\lim _{n\\to \\infty }^{ }\\left(a_n\\pm b_n\\right)`,
      },
      {
        image: `/9/11.svg`,
        latex: `\\lim _{\\righttriangle x\\to 0}^{ }\\frac{\\righttriangle y}{\\righttriangle x}`,
      },
      {
        image: `/9/12.svg`,
        latex: `\\lim _{n\\to \\infty }^{ }\\left(1+\\frac{1}{n}\\right)^n`,
      },
      {
        image: `/9/13.svg`,
        latex: `\\lim _{n\\to \\infty }^{ }\\sum _{k=1}^n\\combi{ }`,
      },
    ],
  },
  {
    header: `10-btn.svg`,
    content: [
      {
        image: `/10/1.svg`,
        latex: `:=`,
      },
      {
        image: `/10/2.svg`,
        latex: `==`,
      },
      {
        image: `/10/3.svg`,
        latex: `+=`,
      },
      {
        image: `/10/4.svg`,
        latex: `-=`,
      },
      {
        image: `/10/5.svg`,
        latex: `\\defequal `,
      },
      {
        image: `/10/6.svg`,
        latex: `\\mequal `,
      },
      {
        image: `/10/7.svg`,
        latex: `\\deltaequal `,
      },
      {
        image: `/10/8.svg`,
        latex: `\\xleftarrow {\\ }{ }`,
      },
      {
        image: `/10/9.svg`,
        latex: `\\xrightarrow {\\ }{ }`,
      },
      {
        image: `/10/10.svg`,
        latex: `\\xleftarrow { }{\\ }`,
      },
      {
        image: `/10/11.svg`,
        latex: `\\xrightarrow { }{\\ }`,
      },
      {
        image: `/10/12.svg`,
        latex: `\\xleftarrow { }{ }`,
      },
      {
        image: `/10/13.svg`,
        latex: `\\xrightarrow { }{ }`,
      },
      {
        image: `/10/14.svg`,
        latex: `\\Xleftarrow {\\ }{ }`,
      },
      {
        image: `/10/15.svg`,
        latex: `\\Xrightarrow {\\ }{ }`,
      },
      {
        image: `/10/16.svg`,
        latex: `\\Xleftarrow { }{\\ }`,
      },
      {
        image: `/10/17.svg`,
        latex: `\\Xrightarrow { }{\\ }`,
      },
      {
        image: `/10/18.svg`,
        latex: `\\Xleftarrow { }{ }`,
      },
      {
        image: `/10/19.svg`,
        latex: `\\Xrightarrow { }{ }`,
      },
      {
        image: `/10/20.svg`,
        latex: `\\xleftrightarrow {\\ }{ }`,
      },
      {
        image: `/10/21.svg`,
        latex: `\\xleftrightarrow { }{\\ }`,
      },
      {
        image: `/10/22.svg`,
        latex: `\\xleftrightarrow { }{ }`,
      },
      {
        image: `/10/23.svg`,
        latex: `\\Xleftrightarrow {\\ }{ }`,
      },
      {
        image: `/10/24.svg`,
        latex: `\\Xleftrightarrow { }{\\ }`,
      },
      {
        image: `/10/25.svg`,
        latex: `\\Xleftrightarrow { }{ }`,
      },
      {
        image: `/10/26.svg`,
        latex: `\\xrightarrow {yields}{\\ }`,
      },
      {
        image: `/10/27.svg`,
        latex: `\\xrightarrow {\\triangle }{\\ }`,
      },
      {
        image: `/10/28.svg`,
        latex: `\\xleftrightarrow {전개}{인수분해}`,
      },
      {
        image: `/10/29.svg`,
        latex: `\\Xrightarrow {부정}{\\ }`,
      },
    ],
  },
  {
    header: `11-btn.svg`,
    content: [
      {
        image: `/11/1.svg`,
        latex: `\\begin{matrix}&\\end{matrix}`,
      },
      {
        image: `/11/2.svg`,
        latex: `\\begin{matrix}\\\\\\end{matrix}`,
      },
      {
        image: `/11/3.svg`,
        latex: `\\begin{matrix}&\\\\&\\end{matrix}`,
      },
      {
        image: `/11/4.svg`,
        latex: `\\begin{matrix}&&\\\\&&\\end{matrix}`,
      },
      {
        image: `/11/5.svg`,
        latex: `\\begin{matrix}&\\\\&\\\\&\\end{matrix}`,
      },
      {
        image: `/11/6.svg`,
        latex: `\\begin{matrix}&&\\\\&&\\\\&&\\end{matrix}`,
      },
      {
        image: `/11/7.svg`,
        latex: `\\begin{cases}\\\\\\end{cases}`,
      },
      {
        image: `/11/8.svg`,
        latex: `\\begin{cases}\\\\\\\\\\end{cases}`,
      },
      {
        image: `/11/9.svg`,
        latex: `\\begin{pmatrix}&\\\\&\\end{pmatrix}`,
      },
      {
        image: `/11/10.svg`,
        latex: `\\begin{bmatrix}&\\\\&\\end{bmatrix}`,
      },
      {
        image: `/11/11.svg`,
        latex: `\\begin{vmatrix}&\\\\&\\end{vmatrix}`,
      },
      {
        image: `/11/12.svg`,
        latex: `행추가`,
      },
      {
        image: `/11/13.svg`,
        latex: `열추가`,
      },
      {
        image: `/11/14.svg`,
        latex: `\\begin{pmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{pmatrix}`,
      },
    ],
  },
];

const SYMBOL_HEADER: LatexHeader[] = [
  {
    header: `12-btn.svg`,
    content: [],
  },
  {
    header: `13-btn.svg`,
    content: [],
  },
  {
    header: `14-btn.svg`,
    content: [],
  },
  {
    header: `15-btn.svg`,
    content: [],
  },
  {
    header: `16-btn.svg`,
    content: [],
  },
  {
    header: `17-btn.svg`,
    content: [],
  },
];
export { FORMULA_HEADER, SYMBOL_HEADER, LatexHeader, LatexContent };
