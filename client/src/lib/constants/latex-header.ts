interface LatexHeader {
  header: string;
  content: LatexContent[];
}

interface LatexContent {
  image: string;
  latex: string;
}
const LATEX_HEADER: LatexHeader[] = [
  {
    header: '1-btn.svg',
    content: [
      {
        image: '/1/1.svg',
        latex: 'sqrt{2}{3}',
      },
      {
        image: '/1/2.svg',
        latex: 'sqrt{2}{3}',
      },
      {
        image: '/1/3.svg',
        latex: 'sqrt{2}{3}',
      },
      {
        image: '/1/4.svg',
        latex: 'sqrt{2}{3}',
      },
    ],
  },
  {
    header: '2-btn.svg',
    content: [
      {
        image: '/2/1.svg',
        latex: 'sqrt{2}{3}',
      },
      {
        image: '/2/2.svg',
        latex: 'sqrt{2}{3}',
      },
      {
        image: '/2/3.svg',
        latex: 'sqrt{2}{3}',
      },
      {
        image: '/2/4.svg',
        latex: 'sqrt{2}{3}',
      },
    ],
  },
];
export { LATEX_HEADER, LatexHeader, LatexContent };
