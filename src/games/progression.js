import { randNumGenerator, getParamByCommand } from '..';
import gameEngine from '../game-engine';

const gameDescription = 'What number is missing in the progression?';

/**
 * Returns a member of an arithmetic progression by position
 * @param {number} sequenceStart
 * @param {number} increment
 * @param {number} position
 * @returns {number}
 */
const progressionMember = (sequenceStart, increment, position) => (
  sequenceStart + (position - 1) * increment
);

/**
 * Returns a sequence of arithmetic progression numbers. Replacing one position with '..'
 * @param {number} sequenceStart
 * @param {number} increment
 * @param {number} secretPosition
 * @param {number} stepCount
 * @returns {string}
 */
const progression = (sequenceStart, increment, secretPosition, stepCount) => {
  let sequence = '';

  for (let i = 1; i < stepCount + 1; i += 1) {
    const member = (i !== secretPosition) ? `${progressionMember(sequenceStart, increment, i)}` : '..';
    sequence = `${sequence} ${member}`;
  }

  return sequence;
};

const gameProperties = () => {
  const sequenceStart = randNumGenerator(1, 100);

  const increment = randNumGenerator(1, 100);

  const secretPosition = randNumGenerator(1, 10);

  const question = progression(sequenceStart, increment, secretPosition, 10);

  const trueAnswer = `${progressionMember(sequenceStart, increment, secretPosition)}`;

  return getParamByCommand(question, trueAnswer);
};

export default () => {
  gameEngine(gameDescription, gameProperties);
};
