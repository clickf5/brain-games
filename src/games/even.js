import { cons } from '@hexlet/pairs';
import randNumGenerator from '../utils';
import gameEngine from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

/**
 * Return true if number is even or false if is not
 * @param {number} num
 * @returns {boolean}
 */
const isEven = (num) => (num % 2 === 0);

const makeGameRound = () => {
  const question = randNumGenerator(1, 100);

  const trueAnswer = (isEven(question)) ? 'yes' : 'no';

  return cons(question, trueAnswer);
};

export default () => {
  gameEngine(gameDescription, makeGameRound);
};
