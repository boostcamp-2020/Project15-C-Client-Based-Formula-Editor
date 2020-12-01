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
        image: `/4/14-b.svg`,
        latex: `\\int _{\\ }^{\\ }f\\left(x\\right)dx}`,
      },
      {
        image: `/4/15-b.svg`,
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
        image: `/9/11.svg`,
        latex: `\\lim _{\\righttriangle x\\to 0}^{ }\\frac{\\righttriangle y}{\\righttriangle x}`,
      },
      {
        image: `/9/10-b.svg`,
        latex: `\\lim _{n\\to \\infty }^{ }\\left(a_n\\pm b_n\\right)`,
      },
      {
        image: `/9/12-b.svg`,
        latex: `\\lim _{n\\to \\infty }^{ }\\left(1+\\frac{1}{n}\\right)^n`,
      },
      {
        image: `/9/13-b.svg`,
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
      // {
      //   image: `/10/26.svg`,
      //   latex: `\\xrightarrow {yields}{\\ }`,
      // },
      {
        image: `/10/27.svg`,
        latex: `\\xrightarrow {\\triangle }{\\ }`,
      },
      // {
      //   image: `/10/28.svg`,
      //   latex: `\\xleftrightarrow {전개}{인수분해}`,
      // },
      // {
      //   image: `/10/29.svg`,
      //   latex: `\\Xrightarrow {부정}{\\ }`,
      // },
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
    header: `+`,
    content: [
      {
        image: '+',
        latex: `+`,
      },
      {
        image: '−',
        latex: `−`,
      },
      {
        image: '×',
        latex: `\\times`,
      },
      {
        image: '÷',
        latex: `\\div`,
      },
      {
        image: '±',
        latex: `\\pm`,
      },
      {
        image: '∓',
        latex: `\\mp`,
      },
      {
        image: '/',
        latex: `/`,
      },
      {
        image: '*',
        latex: `*`,
      },
      {
        image: '∘',
        latex: `\\circ`,
      },
      {
        image: '·',
        latex: `\\cdot`,
      },
      {
        image: '⋆',
        latex: `\\star`,
      },
      {
        image: '⋄',
        latex: `\\diamond`,
      },
      {
        image: '⊙',
        latex: `\\odot`,
      },
      {
        image: '⊗',
        latex: `\\otimes`,
      },
      {
        image: '⊕',
        latex: `\\oplus`,
      },
      {
        image: '⊖',
        latex: `\\ominus`,
      },
      {
        image: '⊘',
        latex: `\\oslash`,
      },
      {
        image: '∩',
        latex: `\\cap`,
      },
      {
        image: '∪',
        latex: `\\cup`,
      },
      {
        image: '⋒',
        latex: `\\Cap`,
      },

      {
        image: '⋓',
        latex: `\\Cup`,
      },
      {
        image: '⊎',
        latex: `\\plusunion`,
      },
      {
        image: '⊓',
        latex: `\\sqcap`,
      },
      {
        image: '⊔',
        latex: `\\wedge`,
      },
      {
        image: '∧',
        latex: `\\wedge`,
      },
      {
        image: '∨',
        latex: `\\vee`,
      },
      {
        image: 'Σ',
        latex: `\\Sigma`,
      },
      {
        image: '∫',
        latex: `\\sint`,
      },
      {
        image: '∬',
        latex: `\\siint`,
      },
      {
        image: '∭',
        latex: `\\siiint`,
      },
      {
        image: '∮',
        latex: `\\soint`,
      },
      {
        image: '∯',
        latex: `\\soiint`,
      },
      {
        image: '∰',
        latex: `\\soiiint`,
      },
      {
        image: '∱',
        latex: `\\tint`,
      },
      {
        image: '∲',
        latex: `\\tlint`,
      },
      {
        image: '∳',
        latex: `\\ctlint`,
      },
      {
        image: '∇',
        latex: `\\nabla`,
      },
      {
        image: '∏',
        latex: `\\sprod`,
      },
      {
        image: '∐',
        latex: `\\amalg`,
      },
      {
        image: '∩',
        latex: `\\lcap`,
      },
      {
        image: '∪',
        latex: `\\lcup`,
      },
      {
        image: '⋀',
        latex: `\\And`,
      },
      {
        image: '⋁',
        latex: `\\Or`,
      },
      {
        image: '⨄',
        latex: `\\uplus`,
      },

      {
        image: '⨃',
        latex: `\\dotunion`,
      },
      {
        image: '∔',
        latex: `\\dotplus`,
      },
      {
        image: '∸',
        latex: `\\dotminus`,
      },
      {
        image: '∖',
        latex: `\\setminus`,
      },
      {
        image: '⋇',
        latex: `\\dm`,
      },
      {
        image: '⋉',
        latex: `\\ltimes`,
      },
      {
        image: '⋊',
        latex: `\\rtimes`,
      },
      {
        image: 'Ｔ',
        latex: `\\top`,
      },
      {
        image: '≀',
        latex: `\\wr`,
      },
      {
        image: '†',
        latex: `\\dagger`,
      },
      {
        image: '‡',
        latex: `\\ddagger`,
      },
      {
        image: '∞',
        latex: `\\infty`,
      },
      {
        image: '∅',
        latex: `\\dotminus`,
      },
    ],
  },
  {
    header: `α`,
    content: [
      {
        image: 'α',
        latex: `\\alpha`,
      },
      {
        image: 'β',
        latex: `\\beta`,
      },
      {
        image: 'γ',
        latex: `\\gamma`,
      },
      {
        image: 'δ',
        latex: `\\delta`,
      },
      {
        image: 'ε',
        latex: `\\epsilon`,
      },
      {
        image: 'ζ',
        latex: `\\zeta`,
      },
      {
        image: 'η',
        latex: `\\eta`,
      },
      {
        image: 'θ',
        latex: `\\theta`,
      },
      {
        image: 'ι',
        latex: `\\iota`,
      },
      {
        image: 'κ',
        latex: `\\kappa`,
      },
      {
        image: 'λ',
        latex: `\\lambda`,
      },
      {
        image: 'μ',
        latex: `\\mu`,
      },
      {
        image: 'ν',
        latex: `\\nu`,
      },
      {
        image: 'ξ',
        latex: `\\xi`,
      },
      {
        image: 'ο', // X
        latex: `\\omikron`,
      },
      {
        image: 'π',
        latex: `\\pi`,
      },
      {
        image: 'ρ',
        latex: `\\rho`,
      },
      {
        image: 'σ',
        latex: `\\sigma`,
      },
      {
        image: 'τ',
        latex: `\\tau`,
      },
      {
        image: 'υ',
        latex: `\\upsilon`,
      },
      {
        image: '𝜑',
        latex: `\\phi`,
      },
      {
        image: 'χ',
        latex: `\\chi`,
      },
      {
        image: '𝜑',
        latex: `\\psi`,
      },
      {
        image: 'ψ',
        latex: `\\omega`,
      },
      {
        image: 'Α', // X
        latex: `\\Alpha`,
      },
      {
        image: 'Β', // X
        latex: `\\Beta`,
      },
      {
        image: 'Γ',
        latex: `\\Gamma`,
      },
      {
        image: 'Δ',
        latex: `\\Delta`,
      },
      {
        image: 'Ε', // X
        latex: `\\Epsilon`,
      },
      {
        image: 'Ζ', // X
        latex: `\\Zeta`,
      },
      {
        image: 'Η', // X
        latex: `\\Eta`,
      },
      {
        image: 'Θ',
        latex: `\\Theta`,
      },
      {
        image: 'Ι', // X
        latex: `\\Iota`,
      },
      {
        image: 'Κ', // X
        latex: `\\Kappa`,
      },
      {
        image: 'Λ',
        latex: `\\Lambda`,
      },
      {
        image: 'Μ', // X
        latex: `\\Mu`,
      },
      {
        image: 'Ν', // X
        latex: `\\Nu`,
      },
      {
        image: 'Ξ',
        latex: `\\Xi`,
      },
      {
        image: 'Ο', // X
        latex: `\\Omikron`,
      },
      {
        image: 'Π',
        latex: `\\Pi`,
      },
      {
        image: 'Ρ', // X
        latex: `\\Rho`,
      },
      {
        image: 'Σ',
        latex: `\\Sigma`,
      },
      {
        image: 'Τ', // X
        latex: `\\Tau`,
      },
      {
        image: 'ϒ',
        latex: `\\Upsilon`,
      },
      {
        image: 'Φ',
        latex: `\\Phi`,
      },
      {
        image: 'Χ', // X
        latex: `\\Chi`,
      },
      {
        image: 'Ψ',
        latex: `\\Psi`,
      },
      {
        image: 'Ω',
        latex: `\\Omega`,
      },
      {
        image: 'ϵ',
        latex: `\\varepsilon`,
      },
      {
        image: 'ϑ',
        latex: `\\vartheta`,
      },
      {
        image: 'ϖ',
        latex: `\\varpi`,
      },
      {
        image: 'ϱ',
        latex: `\\varrho`,
      },
      {
        image: 'ς',
        latex: `\\varsigma`,
      },
      {
        image: 'φ',
        latex: `\\varphi`,
      },
    ],
  },
  {
    header: `ℇ`,
    content: [
      {
        image: '∀',
        latex: `\\forall`,
      },
      {
        image: 'ð', // X
        latex: `\\eth`,
      },
      {
        image: 'ℊ', // X
        latex: `\\g`,
      },
      {
        image: '℩', // X
        latex: `\\variota`,
      },
      {
        image: 'ι', // X
        latex: `\\i`,
      },
      {
        image: 'j', // X
        latex: `\\j`,
      },
      {
        image: 'ℓ',
        latex: `\\ell`,
      },
      {
        image: 'ϰ',
        latex: `\\varkappa`,
      },
      {
        image: 'ℏ',
        latex: `\\hbar`,
      },
      {
        image: 'ơ', // X
        latex: `\\varnothing`,
      },
      {
        image: 'ℱ', // X
        latex: `\\F`,
      },
      {
        image: 'ℒ', // X
        latex: `\\L`,
      },
      {
        image: '∂',
        latex: `\\partial`,
      },
      {
        image: '∁', // X
        latex: `\\complement`,
      },
      {
        image: 'ℑ',
        latex: `\\Im`,
      },
      {
        image: '℘',
        latex: `\\wp`,
      },
      {
        image: 'ℬ', // X
        latex: `\\B`,
      },
      {
        image: 'ℇ', // X
        latex: `\\E`,
      },
      {
        image: '𝕳', // X, 클릭 시 \mathbb{H} 라고 나오고 모양 좀 다름
        latex: `\\H`, // 클릭시 나오는 latex와 입력 latex가 다름
      },
      {
        image: '℧', // X
        latex: `\\mho`,
      },
      {
        image: 'Å', //보류, 클릭시 \text\AA 라고 나오고 모양 좀 다름
        latex: `\\AA`, // 클릭시 나오는 latex와 입력 latex가 다름
      },
      {
        image: 'ℰ', // X
        latex: `\\Ep`,
      },
      {
        image: '℮', // X
        latex: `\\e`,
      },
      {
        image: 'ℵ',
        latex: `\\aleph`,
      },
      {
        image: 'ℶ', // X
        latex: `\\beth`,
      },
      {
        image: 'ℷ', // X
        latex: `\\m`,
      },
      {
        image: 'ℸ', // X
        latex: `\\daleth`,
      },
    ],
  },
  {
    header: `%`, // 다 안됨
    content: [
      {
        image: '㎜', // X
        latex: `\\㎜`,
      },
      {
        image: 'cm', // X
        latex: `\\cm`,
      },
      {
        image: 'm', // X
        latex: `\\meter`,
      },
      {
        image: 'km', // X
        latex: `\\km`,
      },
      {
        image: 'mg', // X
        latex: `\\mg`,
      },
      {
        image: 'g', // X
        latex: `\\gram`,
      },
      {
        image: 'kg', // X
        latex: `\\kg`,
      },
      {
        image: '㎠', // X
        latex: `\\cmx`,
      },
      {
        image: '㎡', // X
        latex: `\\mx`,
      },
      {
        image: '㎢', // X
        latex: `\\kmx`,
      },
      {
        image: '㎤', // X
        latex: `\\cmxx`,
      },
      {
        image: '㎥', // X
        latex: `\\mxx`,
      },
      {
        image: '㎦', // X
        latex: `\\kmxx`,
      },
      {
        image: '㎗', // X
        latex: `\\dl`,
      },
      {
        image: '㎖', // X
        latex: `\\ml`,
      },
      {
        image: 'ℓ', // X
        latex: `\\liter`,
      },
      {
        image: '㏄', // X
        latex: `\\cc`,
      },
      {
        image: '℃', // X
        latex: `\\celsius`,
      },
      {
        image: '℉', // X
        latex: `\\fahren`,
      },
      {
        image: 'K', // X
        latex: `\\kelvin`,
      },
      {
        image: '%', // X
        latex: `\\percent`,
      },
      {
        image: '‰', // X
        latex: `\\permill`,
      },
      {
        image: '‱', // X
        latex: `\\basispoint`,
      },
      {
        image: '°', // X
        latex: `\\cir`,
      },
    ],
  },
  {
    header: `←`,
    content: [
      {
        image: '←',
        latex: `\\gets`,
      },
      {
        image: '→',
        latex: `\\to`,
      },
      {
        image: '↑',
        latex: '\\uparrow',
      },
      {
        image: '↓',
        latex: '\\downarrow',
      },
      {
        image: '↔',
        latex: '\\leftrightarrow',
      },
      {
        image: '↕',
        latex: '\\updownarrow',
      },
      {
        image: '⇐',
        latex: '\\Leftarrow',
      },
      {
        image: '⇒',
        latex: '\\Rightarrow',
      },
      {
        image: '⇑',
        latex: '\\Uparrow',
      },
      {
        image: '⇓',
        latex: '\\Downarrow',
      },
      {
        image: '⇔',
        latex: '\\Leftrightarrow',
      },
      {
        image: '⇕',
        latex: '\\Updownarrow',
      },
      {
        image: '↗',
        latex: '\\nearrow',
      },
      {
        image: '↖',
        latex: '\\nwarrow',
      },
      {
        image: '↘',
        latex: '\\searrow',
      },
      {
        image: '↙',
        latex: '\\swarrow',
      },
      {
        image: '↚', // X
        latex: '\\nleftarrow',
      },
      {
        image: '↛', // X
        latex: '\\nrightarrow',
      },
      {
        image: '↮', // X
        latex: '\\nleftrightarrow',
      },
      {
        image: '⇍', // X
        latex: '\\nLeftarrow',
      },
      {
        image: '⇏', // X
        latex: '\\nRightarrow',
      },
      {
        image: '⇎', // X
        latex: '\\nLeftrightarrow',
      },
      {
        image: '⇠', // X
        latex: '\\dashleftarrow',
      },
      {
        image: '⇢', // X
        latex: '\\dasharrow',
      },
      {
        image: '↤', // X
        latex: '\\mapgets',
      },
      {
        image: '↦',
        latex: '\\mapsto',
      },
      {
        image: '↩',
        latex: '\\hookleftarrow',
      },
      {
        image: '↪',
        latex: '\\hookrightarrow',
      },
      {
        image: '⇋', // X
        latex: '\\leftrightharpoons',
      },
      {
        image: '⇌', // X
        latex: '\\rightleftharpoons',
      },
      {
        image: '⇇', // X
        latex: '\\leftleftarrows',
      },
      {
        image: '⇉', // X
        latex: '\\rightrightarrows',
      },
      {
        image: '⇆', // X
        latex: '\\leftrightarrows',
      },
      {
        image: '⇄', // X
        latex: '\\leftrightarrows',
      },
      {
        image: '⇈', //x
        latex: '\\upuparrows',
      },
      {
        image: '⇊', //x
        latex: '\\downdownarrows',
      },
      {
        image: '↫', //x
        latex: '\\looparrowleft',
      },
      {
        image: '↬', //x
        latex: '\\looparrowright',
      },
      {
        image: '↢', //x
        latex: '\\leftarrowtail',
      },
      {
        image: '↣', //x
        latex: '\\rightarrowtail',
      },
      {
        image: '↰', //x
        latex: '\\Lsh',
      },
      {
        image: '↱', //x
        latex: '\\Rsh',
      },
      {
        image: '↲', //x
        latex: '\\Ldsh',
      },
      {
        image: '↳', //x
        latex: '\\Rdsh',
      },
      {
        image: '⇚', //x
        latex: '\\Lleftarrow',
      },
      {
        image: '⇛', //x
        latex: '\\Rrightarrow',
      },
      {
        image: '↞', //x
        latex: '\\twoheadleftarrow',
      },
      {
        image: '↠', //x
        latex: '\\twoheadrightarrow',
      },
      {
        image: '↶', //x
        latex: '\\curvearrowleft',
      },
      {
        image: '↷', //x
        latex: '\\curvearrowright',
      },
      {
        image: '↺', //x
        latex: '\\circlearrowleft',
      },
      {
        image: '↻', //x
        latex: '\\circlearrowright',
      },
      {
        image: '⊸', //x
        latex: '\\multimap',
      },
      {
        image: '↭', //x
        latex: '\\leftrightsquigarrow',
      },
      {
        image: '↜', //x
        latex: `\\leadsgets`,
      },
      {
        image: '↝', //x
        latex: '\\leadsto',
      },
      {
        image: '⇜', //x
        latex: '\\leftsquigarrow',
      },
      {
        image: '⇝', //x
        latex: '\\rightsquigarrow',
      },
    ],
  },
  {
    header: `<`,
    content: [
      {
        image: '=',
        latex: `=`,
      },
      {
        image: '≑', //x
        latex: `\\doteqdot`,
      },
      {
        image: '≒', //x
        latex: `\\fallingdotseq`,
      },
      {
        image: '≓', //x
        latex: `\\risingdotseq`,
      },
      {
        image: '<', //x
        latex: `<`,
      },
      {
        image: '>', //x
        latex: `>`,
      },
      {
        image: '≤',
        latex: `\\le`,
      },
      {
        image: '≥',
        latex: `\\ge`,
      },
      {
        image: '⋜', //x
        latex: `\\el`,
      },
      {
        image: '⋝', //x
        latex: `\\eg`,
      },
      {
        image: '≲', //x
        latex: `\\lesssim`,
      },
      {
        image: '≳', //x
        latex: `\\gtrsim`,
      },
      {
        image: '≡',
        latex: `\\equiv`,
      },
      {
        image: '∼', //x
        latex: `\\backsim`,
      },
      {
        image: '≃', //x
        latex: `\\backsimeq`,
      },
      {
        image: '≈',
        latex: `\\approx`,
      },
      {
        image: '≅',
        latex: `\\cong`,
      },
      {
        image: '∝',
        latex: `\\propto`,
      },
      {
        image: '≪',
        latex: `\\ll`,
      },
      {
        image: '≫',
        latex: `\\gg`,
      },
      {
        image: '∈',
        latex: `\\in`,
      },
      {
        image: '∋',
        latex: `\\ni`,
      },
      {
        image: '⊂',
        latex: `\\subset`,
      },
      {
        image: '⊃',
        latex: `\\supset`,
      },
      {
        image: '⊆',
        latex: `\\subseteq`,
      },
      {
        image: '⊇',
        latex: `\\supseteq`,
      },
      {
        image: '≺',
        latex: `\\prec`,
      },
      {
        image: '≻',
        latex: `\\succ`,
      },
      {
        image: '≼', //x
        latex: `\\preccurlyeq`,
      },
      {
        image: '≽', //x
        latex: `\\succcurlyeq`,
      },
      {
        image: '≾', //x
        latex: `\\precsim`,
      },
      {
        image: '≿', //x
        latex: `\\succsim`,
      },
      {
        image: '⊏',
        latex: `\\sqsubset`,
      },
      {
        image: '⊐',
        latex: `\\sqsupset`,
      },
      {
        image: '⊑',
        latex: `\\sqsubseteq`,
      },
      {
        image: '⊒',
        latex: `\\sqsupseteq`,
      },
      {
        image: '⊦',
        latex: `\\vdash`,
      },
      {
        image: '⊣',
        latex: `\\dashv`,
      },
      {
        image: '⊨', //x
        latex: `\\Dash`,
      },
      {
        image: '⊩', //x
        latex: `\\force`,
      },
      {
        image: '⋈', //x
        latex: `\\Join`,
      },
      {
        image: '≍', //x
        latex: `\\asymp`, //approx 로 나옴?
      },
      {
        image: '∴',
        latex: `\\therefore`,
      },
      {
        image: '∵',
        latex: `\\because`,
      },
      {
        image: '⋘', //x
        latex: `\\lll`,
      },
      {
        image: '⋙', //x
        latex: `\\ggg`,
      },
      {
        image: '⊲', //x
        latex: `\\lhd`,
      },
      {
        image: '⊳', //x
        latex: `\\rhd`,
      },
      {
        image: '⊴', //x
        latex: `\\unlhd`,
      },
      {
        image: '⊵', //x
        latex: `\\unrhd`,
      },
      {
        image: '≖', //x
        latex: `\\eqcirc`,
      },
      {
        image: '≗', //x
        latex: `\\circeq`,
      },
      {
        image: '≜', //x
        latex: `\\deltaeq`,
      },
      {
        image: '≐',
        latex: `\\doteq`,
      },
      {
        image: '≏', //x
        latex: `\\bumpeq`,
      },
      {
        image: '≎', //x
        latex: `\\Bumpeq`,
      },
      {
        image: '⋔', //x
        latex: `\\pitchfork`,
      },
      {
        image: '≬', //x
        latex: `\\between`,
      },
      {
        image: '∃',
        latex: `\\exists`,
      },
      {
        image: '≠',
        latex: `\\ne`,
      },
      {
        image: '≮',
        latex: `\\nless`,
      },
      {
        image: '≯',
        latex: `\\ngtr`,
      },
      {
        image: '≰', //x
        latex: `\\nleq`,
      },
      {
        image: '≱', //x
        latex: `\\ngeq`,
      },
      {
        image: '≨', //x
        latex: `\\lneq`,
      },
      {
        image: '≩', //x
        latex: `\\gneq`,
      },
      {
        image: '⋦', //x
        latex: `\\lnsim`,
      },
      {
        image: '⋧', //x
        latex: `\\gnsim`,
      },
      {
        image: '≢', //x
        latex: `\\nequiv`,
      },
      {
        image: '≁', //x
        latex: `\\nsim`,
      },
      {
        image: '≄', //x
        latex: `\\nbacksimeq`,
      },
      {
        image: '≉', //x
        latex: `\\napprox`,
      },
      {
        image: '≇', //x
        latex: `\\ncong`,
      },
      {
        image: '∉', //x
        latex: `\\nin`,
      },
      {
        image: '∌', //x
        latex: `\\nni`,
      },
      {
        image: '⊄', //  \not\subet으로 떴다가 엔터치면 \neg\subset으로바뀜
        latex: `\\nsubset`,
      },
      {
        image: '⊅',
        latex: `\\nsupset`,
      },
      {
        image: '⊈',
        latex: `\\nsubseteq`,
      },
      {
        image: '⊉',
        latex: `\\nsupseteq`,
      },
      {
        image: '⊀', //x
        latex: `\\nprec`,
      },
      {
        image: '⊁', //x
        latex: `\\nsucc`,
      },
      {
        image: '⋠', //x
        latex: `\\npreccurlyeq`,
      },
      {
        image: '⋡', //x
        latex: `\\nsucccurlyeq`,
      },
      {
        image: '⋨', //x
        latex: `\\nlesssim`,
      },
      {
        image: '⋩', //x
        latex: `\\ngtrsim`,
      },
      {
        image: '⋢', //x
        latex: `\\nsqsubseteq`,
      },
      {
        image: '⋣', //x
        latex: `\\nsqsupseteq`,
      },
      {
        image: '⊬', //x
        latex: `\\nvdash`,
      },
      {
        image: '⊭', //x
        latex: `\\nvDash`,
      },
      {
        image: '⊮', //x
        latex: `\\nVdash`,
      },
      {
        image: '≭', //x
        latex: `\\nasymp`,
      },
      {
        image: '⋪', //x
        latex: `\\ntriangleleft`,
      },
      {
        image: '⋫', //x
        latex: `\\ntriangleright`,
      },
      {
        image: '⋬', //x
        latex: `\\ntrianglelefteq`,
      },
      {
        image: '⋭', //x
        latex: `\\ntrianglerighteq`,
      },
      {
        image: '∄',
        latex: `\\nexists`,
      },
      {
        image: '∟', //x
        latex: `\\rightangle`,
      },
      {
        image: '∠',
        latex: `\\angle`,
      },
      {
        image: '∡',
        latex: `\\measuredangle`,
      },
      {
        image: '∢', //x
        latex: '\\sphericalangle',
      },
      {
        image: '⊾', //x
        latex: '\\rightanglearc',
      },
      {
        image: '⊿', //x
        latex: '\\righttriangle ',
      },
      {
        image: '□',
        latex: '\\square',
      },
      {
        image: '△',
        latex: '\\triangle',
      },
      {
        image: '⊥',
        latex: '\\perp',
      },
      {
        image: '∥', //x
        latex: '\\nmid',
      },
      {
        image: '∦',
        latex: '\\parallel ',
      },
      {
        image: '♯',
        latex: '\\nparallel ',
      },
      {
        image: '∶', //x
        latex: '\\ratio',
      },
      {
        image: '∷', //x
        latex: '\\proportion',
      },
      {
        image: '∴',
        latex: '\\therefore',
      },
      {
        image: '∵',
        latex: '\\because',
      },
    ],
  },
];

export { FORMULA_HEADER, SYMBOL_HEADER, LatexHeader, LatexContent };
