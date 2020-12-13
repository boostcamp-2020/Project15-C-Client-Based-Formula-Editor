/* eslint-disable no-case-declarations */
const OPERATORS = ['+', '-', '*', '/'];
const POWER = 'POWER(';
const FACTORIAL = 'FACTORIAL';

let flag = false;
let operationArray: (string | number)[] = [];
let formulaArray: (boolean | string | number)[] = [];
let RADIAN = true;
let ans = 0;

interface ButtonType {
  name: string;
  symbol: string | number;
  formula: boolean | string | number;
  type: string;
}

// CALCULATOR BUTTONS
const calculatorButtons: ButtonType[] = [
  {
    name: 'rad',
    symbol: 'Rad',
    formula: false,
    type: 'key',
  },
  {
    name: 'deg',
    symbol: 'Deg',
    formula: false,
    type: 'key',
  },
  {
    name: 'square-root',
    symbol: '√',
    formula: 'Math.sqrt',
    type: 'math_function',
  },
  {
    name: 'square',
    symbol: 'x²',
    formula: POWER,
    type: 'math_function',
  },
  {
    name: 'open-parenthesis',
    symbol: '(',
    formula: '(',
    type: 'number',
  },
  {
    name: 'close-parenthesis',
    symbol: ')',
    formula: ')',
    type: 'number',
  },
  {
    name: 'clear',
    symbol: 'C',
    formula: false,
    type: 'key',
  },
  {
    name: 'delete',
    symbol: '⌫',
    formula: false,
    type: 'key',
  },
  {
    name: 'pi',
    symbol: 'π',
    formula: 'Math.PI',
    type: 'number',
  },
  {
    name: 'cos',
    symbol: 'cos',
    formula: 'trigo(Math.cos,',
    type: 'trigo_function',
  },
  {
    name: 'sin',
    symbol: 'sin',
    formula: 'trigo(Math.sin,',
    type: 'trigo_function',
  },
  {
    name: 'tan',
    symbol: 'tan',
    formula: 'trigo(Math.tan,',
    type: 'trigo_function',
  },
  {
    name: 'addition',
    symbol: '+',
    formula: '+',
    type: 'operator',
  },
  {
    name: '7',
    symbol: 7,
    formula: 7,
    type: 'number',
  },
  {
    name: '8',
    symbol: 8,
    formula: 8,
    type: 'number',
  },
  {
    name: '9',
    symbol: 9,
    formula: 9,
    type: 'number',
  },

  {
    name: 'e',
    symbol: 'e',
    formula: 'Math.E',
    type: 'number',
  },
  {
    name: 'acos',
    symbol: 'acos',
    formula: 'inv_trigo(Math.acos,',
    type: 'trigo_function',
  },
  {
    name: 'asin',
    symbol: 'asin',
    formula: 'inv_trigo(Math.asin,',
    type: 'trigo_function',
  },
  {
    name: 'atan',
    symbol: 'atan',
    formula: 'inv_trigo(Math.atan,',
    type: 'trigo_function',
  },
  {
    name: 'multiplication',
    symbol: '×',
    formula: '*',
    type: 'operator',
  },
  {
    name: '4',
    symbol: 4,
    formula: 4,
    type: 'number',
  },
  {
    name: '5',
    symbol: 5,
    formula: 5,
    type: 'number',
  },
  {
    name: '6',
    symbol: 6,
    formula: 6,
    type: 'number',
  },

  {
    name: 'factorial',
    symbol: '×!',
    formula: FACTORIAL,
    type: 'math_function',
  },
  {
    name: 'exp',
    symbol: 'exp',
    formula: 'Math.exp',
    type: 'math_function',
  },
  {
    name: 'ln',
    symbol: 'ln',
    formula: 'Math.log',
    type: 'math_function',
  },
  {
    name: 'log',
    symbol: 'log',
    formula: 'Math.log10',
    type: 'math_function',
  },
  {
    name: 'subtraction',
    symbol: '–',
    formula: '-',
    type: 'operator',
  },
  {
    name: '1',
    symbol: 1,
    formula: 1,
    type: 'number',
  },
  {
    name: '2',
    symbol: 2,
    formula: 2,
    type: 'number',
  },
  {
    name: '3',
    symbol: 3,
    formula: 3,
    type: 'number',
  },

  {
    name: 'power',
    symbol: 'x^n',
    formula: POWER,
    type: 'math_function',
  },
  {
    name: 'ANS',
    symbol: 'ANS',
    formula: 'ans',
    type: 'number',
  },
  {
    name: 'percent',
    symbol: '%',
    formula: '/100',
    type: 'number',
  },
  {
    name: 'comma',
    symbol: '.',
    formula: '.',
    type: 'number',
  },
  {
    name: 'division',
    symbol: '÷',
    formula: '/',
    type: 'operator',
  },
  {
    name: '0',
    symbol: 0,
    formula: 0,
    type: 'number',
  },
  {
    name: 'calculate',
    symbol: '=',
    formula: '=',
    type: 'calculate',
  },
];

const powerBaseGetter = (formula: (boolean | string | number)[], POWER_SEARCH_RESULT: number[]) => {
  const powers_bases: any[] = [];

  POWER_SEARCH_RESULT.forEach((power_index) => {
    const base = [];
    let parentheses_count = 0;
    let previous_index = power_index - 1;

    while (previous_index >= 0) {
      if (formula[previous_index] === '(') parentheses_count--;
      if (formula[previous_index] === ')') parentheses_count++;

      let is_operator = false;
      OPERATORS.forEach((OPERATOR) => {
        if (formula[previous_index] === OPERATOR) is_operator = true;
      });
      const is_power = formula[previous_index] == POWER;

      if ((is_operator && parentheses_count === 0) || is_power) break;

      base.unshift(formula[previous_index]);
      previous_index--;
    }

    powers_bases.push(base.join(''));
  });

  return powers_bases;
};

const factorialNumberGetter = (
  formula: (boolean | string | number)[],
  FACTORIAL_SEARCH_RESULT: number[]
) => {
  const numbers: any[] = [];
  let factorial_sequence = 0;

  FACTORIAL_SEARCH_RESULT.forEach((factorial_index) => {
    const number = [];
    const next_index = factorial_index + 1;
    const next_input = formula[next_index];

    if (next_input === FACTORIAL) {
      factorial_sequence += 1;
      return;
    }

    const first_factorial_index = factorial_index - factorial_sequence;

    let previous_index = first_factorial_index - 1;
    let parentheses_count = 0;

    while (previous_index >= 0) {
      if (formula[previous_index] === '(') parentheses_count--;
      if (formula[previous_index] === ')') parentheses_count++;

      let is_operator = false;
      OPERATORS.forEach((OPERATOR) => {
        if (formula[previous_index] === OPERATOR) is_operator = true;
      });

      if (is_operator && parentheses_count === 0) break;

      number.unshift(formula[previous_index]);
      previous_index--;
    }

    const number_str = number.join('');
    const factorial = 'factorial(';
    const close_parenthesis = ')';
    const times = factorial_sequence + 1;

    const toReplace = number_str + FACTORIAL.repeat(times);
    const replacement = factorial.repeat(times) + number_str + close_parenthesis.repeat(times);

    numbers.push({
      toReplace: toReplace,
      replacement: replacement,
    });

    factorial_sequence = 0;
  });

  return numbers;
};

const search = (array: (boolean | string | number)[], keyword: string): number[] => {
  const search_result: number[] = [];
  array.forEach((element, index) => {
    if (element === keyword) search_result.push(index);
  });

  return search_result;
};

const factorial = (num: number) => {
  if (num % 1 !== 0) return gamma(num + 1);
  if (num === 0 || num === 1) return 1;

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
    if (result === Infinity) return Infinity;
  }

  return result;
};

const gamma = (n: number): any => {
  // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
  const g = 7;
  const p = [
    0.99999999999980993,
    676.5203681218851,
    -1259.1392167224028,
    771.32342877765313,
    -176.61502916214059,
    12.507343278686905,
    -0.13857109526572012,
    9.9843695780195716e-6,
    1.5056327351493116e-7,
  ];
  if (n < 0.5) {
    return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
  } else {
    n--;
    let x = p[0];
    for (let i = 1; i < g + 2; i++) {
      x += p[i] / (n + i);
    }
    const t = n + g + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
  }
};

const trigo = (callback: any, angle: number) => {
  if (!RADIAN) angle = (angle * Math.PI) / 180;
  return callback(angle);
};

const inv_trigo = (callback: any, value: any) => {
  let angle = callback(value);
  if (!RADIAN) angle = (angle * 180) / Math.PI;
  return angle;
};

const calculator = (
  button: ButtonType,
  radRef: any,
  degRef: any,
  setOutputOperation: any,
  setOutputResult: any
) => {
  const { name, symbol, formula, type } = button;
  flag = false;
  switch (type) {
    case 'operator':
      operationArray.push(symbol);
      formulaArray.push(formula);
      break;
    case 'number':
      operationArray.push(symbol);
      formulaArray.push(formula);
      break;
    case 'trigo_function':
      operationArray.push(symbol + '(');
      formulaArray.push(formula);
      break;
    case 'math_function':
      if (name === 'factorial') {
        operationArray.push('!');
        formulaArray.push(formula);
      } else if (name === 'power') {
        operationArray.push('^(');
        formulaArray.push(formula);
      } else if (name === 'square') {
        operationArray.push('^(');
        formulaArray.push(formula);

        operationArray.push('2)');
        formulaArray.push('2)');
      } else {
        operationArray.push('(' + symbol);
        formulaArray.push('(' + formula);
      }
      break;
    case 'key':
      if (name === 'clear') {
        operationArray = [];
        formulaArray = [];
        setOutputResult(0);
      } else if (name === 'delete') {
        operationArray.pop();
        formulaArray.pop();
      } else if (name === 'rad') {
        RADIAN = true;
        if (radRef.current) radRef.current.classList.add('active-angle');
        if (degRef.current) degRef.current.classList.remove('active-angle');
      } else if (name === 'deg') {
        RADIAN = false;
        if (radRef.current) radRef.current.classList.remove('active-angle');
        if (degRef.current) degRef.current.classList.add('active-angle');
      }
      break;
    case 'calculate':
      flag = true;
      let formulaStr = formulaArray.join('');

      // fix power & factorial
      const POWER_SEARCH_RESULT = search(formulaArray, POWER);
      const FACTORIAL_SEARCH_RESULT = search(formulaArray, FACTORIAL);

      // get power base and replace with right formula
      const BASES = powerBaseGetter(formulaArray, POWER_SEARCH_RESULT);
      BASES.forEach((base) => {
        const toReplace = base + POWER;
        const replacement = 'Math.pow(' + base + ',';

        formulaStr = formulaStr.replace(toReplace, replacement);
      });

      // get factorial number and replace with right formula
      const NUMBERS = factorialNumberGetter(formulaArray, FACTORIAL_SEARCH_RESULT);

      NUMBERS.forEach((factorial) => {
        formulaStr = formulaStr.replace(factorial.toReplace, factorial.replacement);
      });

      let result;
      try {
        result = eval(formulaStr);
      } catch (error) {
        if (error instanceof SyntaxError) {
          result = 'Syntax Error!';
          setOutputResult(result);
          return;
        }
      }

      ans = result;
      operationArray = [result];
      formulaArray = [result];
      setOutputResult(result);
      return;
  }

  setOutputOperation(operationArray.join(''));
};

export { calculatorButtons, calculator, flag };
