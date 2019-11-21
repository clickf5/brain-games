import readlineSync from 'readline-sync';

// приветсвие и получение имени пользователя
export const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// игра "Проверка на чётность"
export const gameEven = () => {
  // const userName = greeting();
  // const isEven = (num) => (num % 2 === 0);
  // const random = (min, max) => Math.round(Math.random() * (max - min) + min);
  // console.log(random(0, 10));
  // console.log(random(0, 10));
  // console.log(random(0, 10));
  // console.log(random(0, 10));
};
