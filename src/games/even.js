import { randNumGenerator, gameEngine, gameInterface } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const gameTrueAnswer = (question) => ((isEven(question)) ? 'yes' : 'no');

const gameProperties = () => {
  const question = randNumGenerator(1, 100);

  const trueAnswer = gameTrueAnswer(question);

  return gameInterface(question, trueAnswer);
};

export default () => {
  gameEngine(gameDescription, gameProperties);
};
