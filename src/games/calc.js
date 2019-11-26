import { randNumGenerator, gameEngine, gameInterface } from '..';

const gameDescription = 'What is the result of the expression?';

/**
 * Returns the value of an arithmetic operation on two numbers
 * @param {number} num1
 * @param {number} num2
 * @param {string} operand
 * @returns {number}
 */
const calculate = (num1, num2, operand) => {
  switch (operand) {
    case '-':
      return (num1 - num2);
    case '+':
      return (num1 + num2);
    default:
      return (num1 * num2);
  }
};

const randOperandGenerator = () => {
  const variant = randNumGenerator(1, 3);
  switch (variant) {
    case 1:
      return '-';
    case 2:
      return '+';
    default:
      return '*';
  }
};

const gameProperties = () => {
  const num1 = randNumGenerator(1, 100);

  const num2 = randNumGenerator(1, 100);

  const operand = randOperandGenerator();

  const question = `${num1} ${operand} ${num2}`;

  const trueAnswer = `${calculate(num1, num2, operand)}`;

  return gameInterface(question, trueAnswer);
};

export default () => {
  gameEngine(gameDescription, gameProperties);
};
