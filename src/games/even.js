import { randNumGenerator, gameInterface } from '..';
import gameEngine from '../game-engine';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

/**
 * Return true if number is even or false if is not
 * @param {number} num
 * @returns {boolean}
 */
const isEven = (num) => (num % 2 === 0);

const gameProperties = () => {
  const question = randNumGenerator(1, 100);

  const trueAnswer = (isEven(question)) ? 'yes' : 'no';

  return gameInterface(question, trueAnswer);
};

export default () => {
  gameEngine(gameDescription, gameProperties);
};
