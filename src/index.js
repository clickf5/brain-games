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

/**
 * Returns the question from the game to the user
 * @param game {function}
 * @returns {string}
 */
const getGameQuestion = (game) => game('getQuestion');

/**
 * Return the true answer for actual question
 * @param game {function}
 * @returns {string}
 */
const getGameTrueAnswer = (game) => game('getTrueAnswer');

/**
 * Returns true if you have completed three steps without errors (you win)
 * Returns false if you made a mistake at least once
 * Use recursion
 * @param stepCount {number}
 * @param gamePropeties {function}
 * @returns {boolean}
 */
const gameStep = (stepCount, gamePropeties) => {
  if (stepCount > 3) {
    return true;
  }

  const game = gamePropeties();

  const question = getGameQuestion(game);

  const trueAnswer = getGameTrueAnswer(game);

  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

  if (answer !== trueAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
    return false;
  }

  console.log('Correct!');
  const newStepCount = stepCount + 1;
  return gameStep(newStepCount, gamePropeties);
};

/**
 * Display game description, get username and run step of game
 * @param gameDescription {string}
 * @param gameProperties {function}
 */
export const gameEngine = (gameDescription, gameProperties) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);

  const userName = greeting();

  if (gameStep(1, gameProperties)) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
