import readlineSync from 'readline-sync';
import { makeQuestion } from './index';

/**
 * Returns the question from the game to the user
 * @param round {function}
 * @returns {string}
 */
const getGameQuestion = (round) => round('getQuestion');

/**
 * Return the true answer for actual question
 * @param round {function}
 * @returns {string}
 */
const getGameTrueAnswer = (round) => round('getTrueAnswer');

/**
 * Returns true if you have completed three steps without errors (you win)
 * Returns false if you made a mistake at least once
 * Use recursion
 * @param stepCount {number}
 * @param makeGameRound {function}
 * @returns {boolean}
 */
const gameStep = (stepCount, makeGameRound) => {
  if (stepCount > 3) {
    return true;
  }

  const round = makeGameRound();

  const question = getGameQuestion(round);

  const trueAnswer = getGameTrueAnswer(round);

  const answer = makeQuestion(question);

  if (answer !== trueAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
    return false;
  }

  console.log('Correct!');
  const newStepCount = stepCount + 1;
  return gameStep(newStepCount, makeGameRound);
};

/**
 * Display game description, get username and run step of game
 * @param gameDescription {string}
 * @param makeGameRound {function}
 */
export default (gameDescription, makeGameRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (gameStep(1, makeGameRound)) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
