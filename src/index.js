import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

// default step count
const maxStepCount = 3;

/**
 * Display game description, get username and run step of game
 * @param gameDescription {string}
 * @param makeGameRound {function}
 */
export default (gameDescription, makeGameRound) => {
  /**
   * Returns true if you have completed three steps without errors (you win)
   * Returns false if you made a mistake at least once
   * Use recursion
   * @param currentStep {number}
   * @returns {boolean}
   */
  const gameStep = (currentStep) => {
    if (currentStep > maxStepCount) {
      return true;
    }

    const round = makeGameRound();

    const question = car(round);

    console.log(`Question: ${question}`);

    const trueAnswer = cdr(round);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== trueAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      return false;
    }

    console.log('Correct!');
    const nextStep = currentStep + 1;
    return gameStep(nextStep);
  };

  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (gameStep(1)) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
