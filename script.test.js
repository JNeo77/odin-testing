import { analyzeArray, caesarCipher, calculator, capitalize, reverseString } from "./script";

test('Capitalize', () => {
  expect(capitalize('words')).toBe('Words');
});

test('Capitalize more than one word string', () => {
  expect(capitalize('thank you')).toBe('Thank you');
});

test('Reverse string', () => {
  expect(reverseString('this is a string')).toBe('gnirts a si siht');
});

test('Reverse string', () => {
  expect(reverseString('hOw About THis')).toBe('siHT tuobA wOh');
});

test('Adding two numbers together', () => {
  expect(calculator.add(5,1)).toBe(6);
});

test('Subtract two numbers', () => {
  expect(calculator.subtract(10,5)).toBe(5);
});

test('Divide two numbers', () => {
  expect(calculator.divide(40,5)).toBe(8);
});

test('Multiply two numbers', () => {
  expect(calculator.multiply(15,4)).toBe(60);
});

test('Cipher wrapping', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Cipher case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Cipher punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Analyze average, min, max and length of array', () => {
  expect(analyzeArray([1,8,3,4,2,6,25])).toEqual({average: 7, min: 1, max: 25, length: 7});
});