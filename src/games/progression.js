import { randNumGenerator, gameEngine, gameInterface } from '..';

const gameDescription = 'What number is missing in the progression?';

const progressionMember = (sequenceStart, progressionStep, position) => (
  sequenceStart + (position - 1) * progressionStep
);

const progression = (sequenceStart, progressionStep, secretPosition, stepCount) => {
  let sequence = '';

  for (let i = 1; i !== stepCount; i += 1) {
    const member = (i !== secretPosition) ? `${progressionMember(sequenceStart, progressionStep, i)}` : '..';
    sequence = `${sequence} ${member}`;
  }

  return sequence;
};

const gameProperties = () => {
  const sequenceStart = randNumGenerator(1, 100);

  const progressionStep = randNumGenerator(1, 100);

  const secretPosition = randNumGenerator(1, 10);

  const question = progression(sequenceStart, progressionStep, secretPosition, 10);

  const trueAnswer = `${progressionMember(sequenceStart, progressionStep, secretPosition)}`;

  return gameInterface(question, trueAnswer);
};

export default () => {
  gameEngine(gameDescription, gameProperties);
};
