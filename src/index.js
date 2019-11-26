import readlineSync from 'readline-sync';

/**
 * Returns the username value and welcome it
 * @returns {string}
 */
export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

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

/**
 * Interface for games
 * @param {string} question
 * @param {string} trueAnswer
 * @returns {Function}
 */
export const gameInterface = (question, trueAnswer) => (command) => {
  switch (command) {
    case 'getQuestion':
      return question;
    default:
      return trueAnswer;
  }
};
