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
   * @param userName {string}
   * @returns {boolean}
   */
  const gameStep = (userName, currentStep) => {
    if (currentStep > maxStepCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const round = makeGameRound();

    const question = car(round);

    console.log(`Question: ${question}`);

    const trueAnswer = cdr(round);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== trueAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    const nextStep = currentStep + 1;
    gameStep(userName, nextStep);
  };

  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  gameStep(userName, 1);
};
