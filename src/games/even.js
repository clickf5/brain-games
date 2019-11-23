import { randNumGenerator, gameEngine } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const gameTrueAnswer = (question) => ((isEven(question)) ? 'yes' : 'no');

const gameProperties = () => {
  const question = randNumGenerator(1, 100);

  const trueAnswer = gameTrueAnswer(question);

  return (command) => {
    switch (command) {
      case 'getQuestion':
        return question;
      case 'getTrueAnswer':
        return trueAnswer;
      default:
        return false;
    }
  };
};

const game = () => {
  gameEngine(gameDescription, gameProperties);
};

export default game;
