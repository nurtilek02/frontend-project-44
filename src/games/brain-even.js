import getRandomNum from '../random.js';
import starter from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const rangemin = 1;
const rangemax = 100;
const iseven = (num) => num % 2 === 0;

const game = () => {
  const number = getRandomNum(rangemin, rangemax);
  const correctanswer = iseven(number) ? 'yes' : 'no';
  const Quest = number;
  return [correctanswer, Quest];
};
const starteven = () => {
  starter(game, rule);
};

export default starteven;
