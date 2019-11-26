import { randNumGenerator, gameEngine, gameInterface } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  const dividend = (num1 < num2) ? num2 : num1;
  const divisor = (num2 < num1) ? num2 : num1;

  const modulo = dividend % divisor;
  if (modulo === 0) {
    return divisor;
  }

  return gcd(dividend, modulo);
};

const gameProperties = () => {
  const num1 = randNumGenerator(1, 100);

  const num2 = randNumGenerator(1, 100);

  const question = `${num1} ${num2}`;

  const trueAnswer = `${gcd(num1, num2)}`;

  return gameInterface(question, trueAnswer);
};

export default () => {
  gameEngine(gameDescription, gameProperties);
};