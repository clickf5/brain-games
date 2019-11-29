import { randNumGenerator, getParamByCommand } from '..';
import gameEngine from '../game-engine';

const gameDescription = 'What is the result of the expression?';

/**
 * Returns the value of an arithmetic operation on two numbers
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 * @returns {number}
 */
const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '-':
      return (num1 - num2);
    case '+':
      return (num1 + num2);
    case '*':
      return (num1 * num2);
    default:
      return false;
  }
};

const operations = '-+*';

const gameProperties = () => {
  const num1 = randNumGenerator(1, 100);

  const num2 = randNumGenerator(1, 100);

  const operand = operations[randNumGenerator(0, operations.length - 1)];

  const question = `${num1} ${operand} ${num2}`;

  const trueAnswer = `${calculate(num1, num2, operand)}`;

  return getParamByCommand(question, trueAnswer);
};

export default () => {
  gameEngine(gameDescription, gameProperties);
};
