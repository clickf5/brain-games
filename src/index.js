import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const isEven = (num) => (num % 2 === 0);

const randNumGenerator = (min, max) => Math.round(Math.random() * (max - min) + min);

const gameEvenStep = (stepCount) => {
  if (stepCount > 3) {
    return true;
  }

  const questionNum = randNumGenerator(1, 100);

  const trueAnswer = isEven(questionNum) ? 'yes' : 'no';

  const answer = readlineSync.question(`Question: ${questionNum}\nYour answer: `);

  if (answer !== trueAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
    return false;
  }

  console.log('Correct!');
  const newStepCount = stepCount + 1;
  return gameEvenStep(newStepCount);
};

export const gameEven = () => {
  const userName = greeting();

  if (gameEvenStep(1)) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
