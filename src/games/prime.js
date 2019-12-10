import { cons } from '@hexlet/pairs';
import randNumGenerator from '../utils';
import gameEngine from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 * Return true if number is prime or false if is not
 * @param {number} num
 * @returns {boolean}
 */
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  const limit = Math.sqrt(num);

  for (let divider = 2; divider <= limit; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

const makeGameRound = () => {
  const question = randNumGenerator(1, 10000);

  const trueAnswer = (isPrime(question)) ? 'yes' : 'no';

  return cons(question, trueAnswer);
};

export default () => {
  gameEngine(gameDescription, makeGameRound);
};
