import { randNumGenerator, getParamByCommand } from '../utils';
import gameEngine from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

/**
 * Returns the greatest common divisor of two numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const gcd = (num1, num2) => {
  const dividend = (num1 < num2) ? num2 : num1;
  const divisor = (num2 < num1) ? num2 : num1;

  const modulo = dividend % divisor;
  if (modulo === 0) {
    return divisor;
  }

  return gcd(dividend, modulo);
};

const makeGameRound = () => {
  const num1 = randNumGenerator(1, 100);

  const num2 = randNumGenerator(1, 100);

  const question = `${num1} ${num2}`;

  const trueAnswer = gcd(num1, num2).toString();

  return getParamByCommand(question, trueAnswer);
};

export default () => {
  gameEngine(gameDescription, makeGameRound);
};
