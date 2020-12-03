interface MenuTitle {
  [key: string]: string;
}

export interface DictionaryMenu {
  menu: string;
  content: MenuLatex[];
}

export interface MenuLatex {
  latex: string;
  title: string;
}

export const DICTIONARY_MENU_TITLE: MenuTitle = {
  polynomial: '다항식과 비례식',
  equation: '방정식과 부등식',
  location: '좌표 평면',
  geometric: '기하',
  function: '함수',
  limit: '극한과 로그',
  differential: '미분/적분/벡터',
  statistics: '확률/통계',
  matrix: '행렬',
  sequence: '수열',
};

export const LATEX_DICTIONARY: DictionaryMenu[] = [
  {
    menu: DICTIONARY_MENU_TITLE.polynomial,
    content: [
      {
        latex: 'a^{ 2 }+2ab+b^{ 2 }=\\left( a+b \\right)^{2}',
        title: '완전 제곱',
      },
      {
        latex: 'a^{ 2 }-2ab+b^{ 2 }=\\left( a-b \\right)^{2}',
        title: '완전 제곱',
      },
      {
        latex: 'a^{ 2 }-b^{ 2 }=\\left( a+b \\right)\\left( a-b \\right)',
        title: '제곱의 차',
      },
      {
        latex: 'x^{ 2 }+\\left( a+b \\right)x+ab=\\left( x+a \\right)\\left( x+b \\right)',
        title: '2차식의 인수분해',
      },
      {
        latex: 'acx^{ 2 }+\\left( ad+bc \\right)x+bd=\\left( ax+b \\right)\\left( cx+d \\right)',
        title: '2차식의 인수분해',
      },
      {
        latex: 'a^{ 3 }+b^{ 3 }=\\left( a+b \\right)\\left( a^{ 2 }-ab+b^{ 2 } \\right)',
        title: '세제곱의 합',
      },
      {
        latex: 'a^{ 3 }-b^{ 3 }=\\left( a-b \\right)\\left( a^{ 2 }+ab+b^{ 2 } \\right)',
        title: '세제곱의 차',
      },
      {
        latex: 'a^{ 3 }+3a^{ 2 }b+3ab^{ 2 }+b^{ 3 }=\\left( a+b \\right)^{3}',
        title: '세제곱',
      },
      {
        latex: 'a^{ 3 }-3a^{ 2 }b+3ab^{ 2 }-b^{ 3 }=\\left( a-b \\right)^{3}',
        title: '세제곱',
      },
      {
        latex: 'a^{ 2 }+b^{ 2 }+c^{ 2 }+2ab+2bc+2ca=\\left( a+b+c \\right)^{2}',
        title: '완전 제곱',
      },
      {
        latex:
          'a^{ 2 }+b^{ 2 }+c^{ 2 }+ab+bc+ca\\ =\\frac {1}{2}\\left[ \\left( a+b \\right)^{2}+\\left( b+c \\right)^{2}+{\\left( c+a \\right)}^{2} \\right] ',
        title: '2차 다항식',
      },
      {
        latex:
          'a^{ 2 }+b^{ 2 }+c^{ 2 }-ab-bc-ca\\ =\\frac {1}{2}\\left[ \\left( a-b \\right)^{2}+\\left( b-c \\right)^{2}+{\\left( c-a \\right)}^{2} \\right]',
        title: '2차 다항식',
      },
      {
        latex:
          'a^{ 3 }+b^{ 3 }+c^{ 3 }-3abc\\ =\\left( a+b+c \\right)\\left( a^{ 2 }+b^{ 2 }+c^{ 2 }-ab-bc-ca \\right)\\ =\\frac {1}{2}\\left( a+b+c \\right)\\left[ \\left( a-b \\right)^{2}+\\left( b-c \\right)^{2}+\\left( c-a \\right)^{2} \\right]',
        title: '3차 다항식',
      },
      {
        latex: 'a^4+a^2b^2+b^4=\\left(a^2+ab+b^2\\right)\\left(a^2-ab+b^2\\right)',
        title: '4차 다항식',
      },
      {
        latex:
          '\\frac { a }{ b }=\\frac { c }{ d }=\\frac { e }{ f }=\\frac { a+c+e }{ b+d+f } =\\frac { pa+qc+re }{ pb+qd+rf } ',
        title: '비례식의 성질',
      },
    ],
  },
  {
    menu: DICTIONARY_MENU_TITLE.equation,
    content: [
      { latex: 'ax^{2}+bx+c=0', title: '이차방정식' },
      { latex: 'x=\\frac {-b\\pm \\sqrt {b^{ 2 }-4ac}}{2a}', title: '근의 공식' },
      { latex: 'D=b^{ 2 }-4ac', title: '판별식' },
      {
        latex:
          'D=b^{ 2 }-4ac\\Leftrightarrow ax^{ 2 }+bx+c=a\\left( x+\\frac {b}{2a} \\right)^{2}\\left( a\\neq 0 \\right) ',
        title: '완전 제곱식',
      },
      {
        latex:
          '\\alpha +\\beta =-\\frac { b }{ a },\\alpha \\beta =\\frac { c }{ a },\\left| \\alpha -\\beta  \\right|=\\frac { \\sqrt { b^{ 2 }-4ac } }{ \\left| \\alpha  \\right| }',
        title: '2차방정식의 근과 계수의 관계',
      },
      {
        latex:
          '\\alpha +\\beta +\\gamma =-\\frac {b}{a},\\alpha \\beta +\\beta \\gamma +\\gamma \\alpha =\\frac {c}{a},\\alpha \\beta \\gamma =- \\frac {d}{a} ',
        title: '3차방정식의 근과 계수의 관계',
      },
      {
        latex:
          '\\left( x-\\alpha  \\right)\\left( x-\\beta  \\right)>0\\quad \\Leftrightarrow \\quad x < \\alpha \\quad or \\quad x > \\beta ',
        title: '2차부등식의 해',
      },
      {
        latex:
          '\\left( x-\\alpha  \\right)\\left( x-\\beta  \\right)<0\\quad \\Leftrightarrow \\quad \\alpha < x < \\beta ',
        title: '2차부등식의 해',
      },
      {
        latex: '\\frac {a+b}{2}\\ge \\sqrt {ab}\\ge \\frac {2ab}{a+b}\\left( a>0,b>0 \\right) ',
        title: '산술기하평균',
      },
    ],
  },
  {
    menu: DICTIONARY_MENU_TITLE.location,
    content: [
      {
        latex:
          'PQ=\\sqrt {\\left( x_{ 2 }-x_{ 1 } \\right)^{2}+\\left( y_{ 2 }-y_{ 1 } \\right)^{2}}',
        title: '좌표평면에서의 두점 사이의 거리',
      },
      {
        latex:
          'PQ=\\sqrt{\\left(x_{2}-x_{1}\\right) ^{2}+\\left(y_{2}-y_{1}\\right) ^{2} +\\left(z_{2}-z_{1}\\right)^{2}}',
        title: '좌표공간에서의 두점 사이의 거리',
      },
      {
        latex: 'P\\left( \\frac {mx_{ 2 }+nx_{ 1 }}{m+n},\\frac {my_{ 2 }+ny_{ 1 }}{m+n} \\right) ',
        title: '평면좌표의 내분점',
      },
      {
        latex: 'M\\left( \\frac {x_{ 1 }+x_{ 2 }}{2},\\frac {y_{ 1 }+y_{ 2 }}{2} \\right) ',
        title: '평면좌표의 중점',
      },
      {
        latex: 'Q\\left( \\frac {mx_{2}-nx {1}}{m-n},\\frac {my{2}-ny_{1}}{m-n} \\right) ',
        title: '평면좌표의 외분점',
      },
    ],
  },
  {
    menu: DICTIONARY_MENU_TITLE.geometric,
    content: [
      {
        latex: '\\frac {a}{sinA}=\\frac {b}{sinB}=\\frac {c}{sinC}=2R',
        title: '삼각형의 사인법칙',
      },
      {
        latex: 'a=bcosC+ccosB b=ccosA+acosC c=acosB+bcosA ',
        title: '삼각형의 제1코사인법칙',
      },
      {
        latex:
          'a^{ 2 }=b^{ 2 }+c^{ 2 }-2bccosA b^{ 2 }=c^{ 2 }+a^{ 2 }-2cacosB c^{ 2 }=a^{ 2 }+b^{ 2 }-2abcosC ',
        title: '삼각형의 제2코사인법칙',
      },
      { latex: 'S=\\frac {1}{2}bcsinA ', title: '삼각형의 넓이' },
      {
        latex:
          'S=\\sqrt {s\\left( s-a \\right)\\left( s-b \\right)\\left( s-c \\right)},\\left( 2s=a+b+c \\right) ',
        title: '삼각형의 넓이',
      },
      {
        latex: '\\left( \\frac {x_{ 1 }+x_{ 2 }+x_{3}}{3},\\frac {y_{1}+y {2}+y {3}}{3} \\right) ',
        title: '삼각형의 무게중심',
      },
      {
        latex: 'y-y{ 1 }=\\frac {y{ 2 }-y_{ 1 }}{x_{ 2 }-x_{ 1 }}\\left( x-x_{ 1 } \\right) ',
        title: '두 점을 지나는 직선의 방정식',
      },
      {
        latex: '\\frac {x}{a}+\\frac {y}{b}=1',
        title: '두 절편을 지나는 직선의 방정식',
      },
      {
        latex: 'd=\\frac {\\left| ax_{ 1 }+by_{ 1 }+c \\right|}{\\sqrt {a^{ 2 }+b^{ 2 }}} ',
        title: '점과 직선의 거리',
      },
      {
        latex:
          '\\frac {x^{ 2 }}{a^{ 2 }}+\\frac {y^{ 2 }}{b^{ 2 }}=1\\quad \\left( a>b>0,k^{ 2 }=a^{ 2 }-b^{ 2 } \\right) ',
        title: '타원의 방정식',
      },
      {
        latex: '\\frac {x_{ 1 }x}{a^{ 2 }}+\\frac {y_{ 1 }y}{b^{ 2 }}=1 ',
        title: '타원의 접선의 방정식',
      },
      {
        latex: 'y=mx\\pm \\sqrt {a^{ 2 }m^{ 2 }+b^{ 2 }} ',
        title: '타원의 접선의 방정식',
      },
      {
        latex: '\\left( x-a \\right)^{2}+\\left( y-b \\right)^{2}=r^{ 2 } ',
        title: '원의 방정식',
      },
      { latex: 'x_{ 1 }x+y_{ 1 }y=r^{ 2 } ', title: '원의 접선의 방정식' },
      { latex: 'y=mx\\pm r\\sqrt {m^{ 2 }+1} ', title: '원의 접선의 방정식' },
      {
        latex:
          '\\frac {x^{ 2 }}{a^{ 2 }}-\\frac {y^{ 2 }}{b^{ 2 }}=1\\quad \\left( a>b>0,k^{ 2 }=a^{ 2 }+b^{ 2 } \\right) ',
        title: '쌍곡선의 방정식',
      },
      { latex: 'y=\\pm \\frac {b}{a}x ', title: '쌍곡선의 점근선의 방정식' },
      {
        latex: '\\frac {x_{ 1 }x}{a^{ 2 }}-\\frac {y_{ 1 }y}{b^{ 2 }}=1 ',
        title: '쌍곡선의 접선의 방정식',
      },
      {
        latex: 'y=mx\\pm \\sqrt {a^{2}m^{2}-b^{2}} ',
        title: '쌍곡선의 접선의 방정식',
      },
      {
        latex:
          '\\left( x-a \\right)^{2}+\\left( y-b \\right)^{2}+\\left( z-c \\right)^{2}=r^{ 2 } ',
        title: '구의 방정식',
      },
    ],
  },
  {
    menu: DICTIONARY_MENU_TITLE.function,
    content: [
      {
        latex:
          'csc\\theta =\\frac { 1 }{ sin\\theta }, sec\\theta =\\frac { 1 }{ cos\\theta  }, cot\\theta =\\frac { 1 }{ tan\\theta  } ',
        title: '삼각함수의 역수관계',
      },
      {
        latex:
          'tan\\theta =\\frac {sin\\theta }{cos\\theta }, cot\\theta =\\frac {cos\\theta }{sin\\theta } ',
        title: '삼각함수의 상제관계',
      },
      {
        latex:
          'sin^{ 2 }\\theta +cos^{ 2 }\\theta =1\\ tan^{ 2 }\\theta +1=sec^{ 2 }\\theta \\ 1+cot^{ 2 }\\theta =csc^{ 2 }\\theta  ',
        title: '삼각함수의 제곱관계',
      },
      {
        latex: 'sin\\left( 360˙ +\\theta  \\right)=sin\\theta ',
        title: '삼각함수의 주기공식',
      },
      {
        latex: 'sin\\left( -\\theta  \\right)=-sin\\theta ',
        title: '삼각함수의 음각공식',
      },
      {
        latex: 'sin\\left( 360˙ -\\theta  \\right)=sin\\theta ',
        title: '삼각함수의 보각공식',
      },
      {
        latex: 'sin\\left( 90˙ -\\theta  \\right)=cos\\theta',
        title: '삼각함수의 여각공식',
      },
      {
        latex:
          'sin\\left( \\alpha +\\beta  \\right)=sin\\alpha cos\\beta +cos\\alpha sin\\beta \\ sin\\left( \\alpha -\\beta  \\right)=sin\\alpha cos\\beta -cos\\alpha sin\\beta ',
        title: '삼각함수의 덧셈정리',
      },
      {
        latex:
          'cos\\left( \\alpha +\\beta  \\right)=cos\\alpha cos\\beta -sin\\alpha sin\\beta \\ cos\\left( \\alpha -\\beta  \\right)=cos\\alpha cos\\beta +sin\\alpha sin\\beta  ',
        title: '삼각함수의 덧셈정리',
      },
      {
        latex:
          'tan\\left( \\alpha +\\beta  \\right)=\\frac { tan\\alpha +tan\\beta  }{ 1-tan\\alpha tan\\beta  }\\ tan\\left( \\alpha -\\beta  \\right)=\\frac { tan\\alpha -tan\\beta  }{ 1+tan\\alpha tan\\beta  } ',
        title: '삼각함수의 덧셈정리',
      },
      {
        latex:
          'asin\\theta +bcos\\theta =\\sqrt {a^{ 2 }+b^{ 2 }}sin\\left( \\theta +\\alpha  \\right), \\left( cos\\alpha =\\frac {a}{\\sqrt {a^{ 2 }+b^{ 2 }}},sin\\alpha =\\frac {b}{\\sqrt {a^{ 2 }+b^{ 2 }}} \\right) ',
        title: '삼각함수의 합성',
      },
      {
        latex:
          'asin\\theta +bcos\\theta =\\sqrt {a^{ 2 }+b^{ 2 }}sin\\left( \\theta -\\beta  \\right), \\left( cos\\beta =\\frac {b}{\\sqrt {a^{ 2 }+b^{ 2 }}},sin\\beta =\\frac {a}{\\sqrt {a^{ 2 }+b^{ 2 }}} \\right) ',
        title: '삼각함수의 합성',
      },
      { latex: 'sin2\\alpha =2sin\\alpha cos\\alpha  ', title: '2배각의 공식' },
      {
        latex:
          'cos2\\alpha =cos^{ 2 }\\alpha -sin^{ 2 }\\alpha =2cos^{ 2 }\\alpha -1=1-2sin^{ 2 }\\alpha ',
        title: '2배각의 공식',
      },
      {
        latex: 'tan2\\alpha =\\frac { 2tan\\alpha  }{ 1-tan^{ 2 } {\\alpha}} ',
        title: '2배각의 공식',
      },
      { latex: 'sin3\\alpha=3sin\\alpha -4sin^{ 3 }\\alpha ', title: '3배각의 공식' },
      {
        latex: 'cos3\\alpha =4cos^{ 3 }\\alpha -3cos\\alpha ',
        title: '3배각의 공식',
      },
      {
        latex: 'sin^{ 2 }\\frac {\\alpha }{2}=\\frac {1-cos\\alpha }{2} ',
        title: '반각의 공식',
      },
      {
        latex: 'cos^{2}\\frac{\\alpha}{2}=\\frac{1+cos\\alpha}{2} ',
        title: '반각의 공식',
      },
      {
        latex: 'tan^{ 2 }\\frac {\\alpha }{2}=\\frac {1-cos\\alpha }{1+cos\\alpha } ',
        title: '반각의 공식',
      },
      {
        latex:
          'sin\\alpha cos\\beta =\\frac { 1 }{ 2 }\\left\\{ sin\\left( \\alpha +\\beta  \\right)+sin\\left( \\alpha -\\beta  \\right) \\right\\} ',
        title: '삼각함수의 곱을 합/차로 변형',
      },
      {
        latex:
          'cos\\alpha sin\\beta =\\frac { 1 }{ 2 }\\left\\{ sin\\left( \\alpha +\\beta  \\right)-sin\\left( \\alpha -\\beta  \\right) \\right\\}  ',
        title: '삼각함수의 곱을 합/차로 변형',
      },
      {
        latex:
          'cos\\alpha cos\\beta =\\frac { 1 }{ 2 }\\left\\{ cos\\left( \\alpha +\\beta  \\right)+cos\\left( \\alpha -\\beta  \\right) \\right\\} ',
        title: '삼각함수의 곱을 합/차로 변형',
      },
      {
        latex:
          'sin\\alpha sin\\beta =-\\frac { 1 }{ 2 }\\left\\{ cos\\left( \\alpha +\\beta  \\right)-cos\\left( \\alpha -\\beta  \\right) \\right\\} ',
        title: '삼각함수의 곱을 합/차로 변형',
      },
      {
        latex:
          'sin\\alpha +sin\\beta =2sin\\frac {\\alpha +\\beta }{2}cos\\frac {\\alpha -\\beta }{2} ',
        title: '삼각함수의 합/차를 곱으로 변형',
      },
      {
        latex:
          'sin\\alpha -sin\\beta =2cos\\frac { \\alpha +\\beta  }{ 2 }sin\\frac { \\alpha -\\beta  }{ 2 } ',
        title: '삼각함수의 합/차를 곱으로 변형',
      },
      {
        latex:
          'cos\\alpha +cos\\beta =2cos\\frac {\\alpha +\\beta }{2}cos\\frac {\\alpha -\\beta }{2} ',
        title: '삼각함수의 합/차를 곱으로 변형',
      },
      {
        latex:
          'cos\\alpha -cos\\beta =-2sin\\frac { \\alpha +\\beta  }{ 2 }sin\\frac { \\alpha -\\beta  }{ 2 } ',
        title: '삼각함수의 합/차를 곱으로 변형',
      },
    ],
  },
  {
    menu: DICTIONARY_MENU_TITLE.limit,
    content: [
      {
        latex: 'a^{ x }=b\\Leftrightarrow x=log_{ a }b\\quad  \\left( a>0,a\\neq 1,b>0 \\right) ',
        title: '로그의 정의',
      },
      { latex: 'log_{ a }a=1,log_{ a }1=0 ', title: '로그의 기본성질' },
      { latex: 'log_{a}{xy}=log_{a}{x}+log_{a}{y}', title: '로그의 기본성질' },
      {
        latex: 'log_{ a }\\frac {x}{y}=log_{ a }x-log_{ a }y ',
        title: '로그의 기본성질',
      },
      { latex: 'log_{ a }x^{ n }=nlog_{ a }x ', title: '로그의 기본성질' },
      {
        latex: 'log_{ a }b=\\frac {log_{ c }b}{log_{ c }a} ',
        title: '밑의 변환공식',
      },
      { latex: 'log_{ a }b=\\frac {1}{log_{ b }a} ', title: '밑의 변환공식' },
      {
        latex: 'lim _{x\\to 0}\\frac {sinx}{x}=1 ',
        title: '삼각함수의 극한의 기본',
      },
      {
        latex: '\\lim _{ x\\to \\infty  }{ \\left( 1+\\frac { 1 }{ x } \\right)^{ x } }=e ',
        title: '극한값 e',
      },
    ],
  },
  {
    menu: DICTIONARY_MENU_TITLE.differential,
    content: [
      {
        latex: '\\frac {△ y}{△ x}=\\frac {f\\left( a+△ x \\right)-f\\left( a \\right)}{△ x} ',
        title: '평균 변화율',
      },
      {
        latex: 'lim _{△ x\\to 0}{\\frac {\\righttriangl… x \\right)-fleft( a \\right)}{△ x}} ',
        title: '변화율(미분계수)',
      },
      {
        latex: 'lim _{△ x\\to 0}{\\frac {\\righttriangl… x \\right)-fleft( x \\right)}{△ x}} ',
        title: '도함수',
      },
      {
        latex: 'lim _{△ t\\to 0}{\\frac {△ y}{△ t}}=\\frac {dy}{dt} ',
        title: '시각에 대한 변화율',
      },
      {
        latex:
          "F'left( x \\right)=fleft( x \\right)Leftrightarrow int {fleft( x \\right)dx}=Fleft( x \\right)+C ",
        title: '부정적분의 정의',
      },
      {
        latex: 'int {kdx}=kx+C left( k는quad 상수 \\right) ',
        title: '부정적분의 기본공식',
      },
      {
        latex:
          'int {x^{ n }dx}=\\frac {1}{n+1}x^{ n+1 }+Cquad left( n은quad 양의quad 정수 \\right) ',
        title: '부정적분의 기본공식',
      },
      {
        latex:
          'int {kcdot fleft( x \\right)dx}=kint {fleft( x \\right)dx}quad left( k는quad 상수 \\right) ',
        title: '부정적분의 기본공식',
      },
      {
        latex:
          'int {left( fleft( x \\right)pm gleft( x \\right… {gleft( x \\right)dxquad } left( 복호동순 \\right) ',
        title: '부정적분의 기본공식',
      },
      {
        latex: 'int _{ a }^{ b }{ fleft( x \\right)dx }=lim { n…left( x{ k } \\right)cdot △ x } } ',
        title: '정적분의 정의',
      },
      {
        latex:
          'int { a }^{ b }{ fleft( x \\right)dx }=left[ F…{ a }^{ b }=Fleft( a \\right)-Fleft( b \\right) ',
        title: '정적분의 기본정리',
      },
      {
        latex:
          'int _{ a }^{ b }{ kfleft( x \\right)dx }=kint _{…t( x \\right)dx }quad left( k는quad 상수 \\right) ',
        title: '정적분의 기본공식',
      },
      {
        latex:
          'int _{ a }^{ b }{ left( fleft( x \\right)pm gl…}{ gleft( x \\right)dx } left( 복호동순 \\right) ',
        title: '정적분의 기본공식',
      },
      {
        latex:
          'int _{ a }^{ b }{ fleft( x \\right)dx }=int _{ a…t)dx }+int _{ c }^{ b }{ kfleft( x \\right)dx } ',
        title: '정적분의 기본공식',
      },
      {
        latex:
          'lim _{ n\\to infty }{ sum _{ k=1 }^{ n }{ flef…n } } }=int _{ a }^{ b }{ fleft( x \\right)dx } ',
        title: '무한급수와 정적분',
      },
      {
        latex:
          'lim _{n\\to infty }^{ }sum _{k=1}^nfleft(a+\\fra… _0^pfleft(a+x\\right)dxquad left(p=b-a\\right) ',
        title: '무한급수와 정적분',
      },
      {
        latex:
          'lim _{ n\\to infty }{ sum _{ k=1 }^{ n }{ flef…eft( a+px \\right)dx }quad left( p=b-a \\right) ',
        title: '무한급수와 정적분',
      },
      {
        latex: 'S=int _{ a }^{ b }{ fleft( x \\right)dx } ',
        title: 'x축과 곡선사이의 넓이',
      },
      {
        latex: 'S=int _{ a }^{ b }{ fleft( y \\right)dy } ',
        title: 'y축과 곡선사이의 넓이',
      },
      {
        latex:
          'V=int _{ a }^{ b }{ pi y^{ 2 }dx }=pi int _{ a…}{ left{ fleft( x \\right) \\right} ^{ 2 }dx } ',
        title: '회전체의 부피',
      },
    ],
  },
  {
    menu: DICTIONARY_MENU_TITLE.statistics,
    content: [
      {
        latex:
          '{ n }{ P }{ r }=nleft( n-1 \\right)left( n-2 \\right)\\times ....\\times left( n-r+1 \\right) ',
        title: '순열',
      },
      {
        latex: '{ n }{ P }{ r }=\\frac { n! }{ left( n-r \\right)! } ',
        title: '순열',
      },
      { latex: '{ }{n}prod { }^{ }{ }{r}=n^r ', title: '중복 순열' },
      {
        latex:
          '{ n }{ C }{ r }=\\frac { { n }{ P }{ r } }{ r! }=\\frac { n! }{ r!left( n-r \\right)! } ',
        title: '조합',
      },
      { latex: '{n}{H}{r}= {n+r-1}{C}{r}', title: '중복 조합' },
      {
        latex:
          'left( a+b \\right)^{ 2 }sum { r=0 }^{ n }{ combi{ }{ n }{ C }_{ r }a^{ n-r }b^{ r } } ',
        title: '이항정리의 일반항',
      },
      {
        latex:
          'sigma ^{ 2 }=\\frac { 1 }{ n }sum _{ i=1 }^{ n }{…sum { i=1 }^{ n }{ { x{ i }^{ 2 } }-m^{ 2 }  ',
        title: '표준편차',
      },
      {
        latex:
          'sigma ^{ 2 }=\\frac { 1 }{ N }sum _{ i=1 }^{ n }{… left( N=sum { i=1 }^{ n }{ f{ i } } \\right) ',
        title: '표준편차의 계산',
      },
      {
        latex:
          'sigma ^{ 2 }=\\frac { 1 }{ N }sum { i=1 }^{ n }{…i=1 }^{ n }{ f{ i } },quad A는quad 가평균 \\right) ',
        title: '표준편차의 계산',
      },
    ],
  },
  {
    menu: DICTIONARY_MENU_TITLE.matrix,
    content: [
      {
        latex:
          'A=\\begin{pmatrix}{ { a }{ 11 } }&{ { a }{ 12 } }… } &{ { a }{ 22 }+ { b }{ 22 } }end{pmatrix} ',
        title: '행렬의 합',
      },
      {
        latex:
          'A=\\begin{pmatrix}{ { a }{ 11 } }&{ { a }{ 12 } }… } }&{ { a }{ 22 }- { b }{ 22 } }end{pmatrix} ',
        title: '행렬의 차',
      },
      {
        latex:
          'A=\\begin{pmatrix}{ { a }{ 11 } }&{ { a }{ 12 }… { ka }{ 21 } }&{ { ka }{ 22 } }end{pmatrix} ',
        title: '행렬의 곱',
      },
      {
        latex:
          '\\begin{pmatrix}{ a }&{ b }end{pmatrix}\\begin{pmat…x}{ x }{ y }end{pmatrix}=left( ax+by \\right) ',
        title: '행렬의 곱(1x2와 2x1)',
      },
      {
        latex:
          '\\begin{pmatrix}{ a }&{ b }end{pmatrix}\\begin{pmat…=\\begin{pmatrix}{ ax+by }&{ au+bv }end{pmatrix} ',
        title: '행렬의 곱(1x2와 2x2)',
      },
      {
        latex:
          '\\begin{pmatrix}{ a }{ b }end{pmatrix}\\begin{pma…matrix}{ ax }&{ ay }{ bx }&{ by }end{pmatrix} ',
        title: '행렬의 곱(2x1와 1x2)',
      },
      {
        latex:
          '\\begin{pmatrix}{ a }&{ b }{ c }&{ d }end{pmatri…\\begin{pmatrix}{ ax+by }{ cx+dy }end{pmatrix} ',
        title: '행렬의 곱(2x2와 2x1)',
      },
      {
        latex:
          '\\begin{pmatrix}{ a }&{ b }{ c }&{ d }end{pmatri…by }&{ au+bv }{ cx+dy }&{ cu+dv }end{pmatrix} ',
        title: '행렬의 곱(2x2와 2x2)',
      },
      {
        latex:
          '\\begin{pmatrix}{ a }&{ b }&{ c }{ d }&{ e }&{ f …+bv+cw }{ dx+ey+fz }&{ du+ev+fw }end{pmatrix} ',
        title: '행렬의 곱(2x3과 3x2)',
      },
      {
        latex:
          'A=\\begin{pmatrix}{ a }&{ b }{ c }&{ d }end{pmat…d{pmatrix} left( 단,quad ad-bc\\n' +
          'eq 0 \\right) ',
        title: '역행렬',
      },
    ],
  },
  {
    menu: DICTIONARY_MENU_TITLE.sequence,
    content: [
      {
        latex: ' { a }{ n }=a+left( n-1 \\right)d ',
        title: '등차수열의 일반항',
      },
      { latex: 'x=\\frac { a+b }{ 2 } ', title: '등차중항' },
      {
        latex: '{ 2a }{ n+1 }={ a }{ n }+{ a }{ n+2 } ',
        title: '등차수열의 조건',
      },
      {
        latex: 'S_{ n }=\\frac { nleft( a+1 \\right) }{ 2 } ',
        title: '등차수열의 합',
      },
      {
        latex: 'S_{ n }=\\frac { nleft{ 2a+left( n-1 \\right)d \\right} }{ 2 } ',
        title: '등차수열의 합',
      },
      { latex: 'x=\\frac{2ab}{a+b}', title: '조화중항' },
      {
        latex: '\\frac { 2 }{ a_{ n+1 } }=\\frac { 1 }{ a_{ n } }+\\frac { 1 }{ a_{ n+2 } } ',
        title: '조화수열의 조건',
      },
      {
        latex: 'a_{ n }=ar^{ n-1 }quad left( 단,quad r\\neq 0 \\right) ',
        title: '등비수열의 일반항',
      },
      { latex: 'x=pm sqrt { ab } ', title: '등비중항' },
      {
        latex: 'left( { a }{ n+1 } \\right) ^{2}=a{n}a_{n+2}',
        title: '등비수열의 조건',
      },
      {
        latex:
          'S_{ n }=\\frac { aleft( r^{ n }-1 \\right) }{ r-1 }quad left( 단,quad r\\n' +
          'eq 1 \\right) ',
        title: '등비수열의 합',
      },
      {
        latex: 'S_{ n }=naquad left( 단,quad r=1 \\right) ',
        title: '등비수열의 합',
      },
      {
        latex:
          'sum { k=1 }^{ n }{ k^{ 2 } }=\\frac { nleft( n+1 \\right) left( 2n+1 \\right) }{ 6 } ',
        title: '거듭제곱의 합',
      },
      {
        latex:
          'sum { k=1 }^{ n }{ k^{ 3 } }=left{ \\frac { nl…ight} ^{ 2 }=left( 1+2+3+....+n \\right) ^{ 2 } ',
        title: '세제곱의 합',
      },
      {
        latex:
          'a{ n }=a{ 1 }+left( b_{ 1 }+b_{ 2 }+b_{ 3 }+...…\\right)=a_{ 1 }+sum { k=1 }^{ n-1 }{ b{ k } } ',
        title: '계차수열의 원수열 일반항',
      },
      {
        latex: 'sum { k }=\\frac { nleft( n+1 \\right) }{ 2 } ',
        title: '수열의 합',
      },
    ],
  },
];
