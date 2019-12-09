import readlineSync from 'readline-sync';

/**
 * Make custom question and returns answer
 * @param {string} question
 * @returns {string}
 */
export const makeQuestion = (question) => {
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return `${answer}`;
};

/**
 * Random number generator from a custom range
 * @param {number} min - start of range
 * @param {number} max - end of range
 */
export const randNumGenerator = (min, max) => Math.round(Math.random() * (max - min) + min);
