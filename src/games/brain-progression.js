import getRandomNum from '../random.js';
import starter from '../index.js';

const rule = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 1; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const game = () => {
  const lengthprogression = getRandomNum(6, 10);
  const stepprogression = getRandomNum(2, 5);
  const startpoint = getRandomNum(3, 10);
  const finishpoint = getRandomNum(0, lengthprogression - 2);
  const progression = getProgression(startpoint, stepprogression, lengthprogression);
  const correctanswer = progression[finishpoint] ? progression[finishpoint].toString() : `ошибка ${progression}, ${finishpoint}`;
  progression.splice(finishpoint, 1, '..');
  const Quest = progression.join(' ');
  return [correctanswer, Quest];
};

const gamestarterprogression = () => {
  starter(game, rule);
};
export default gamestarterprogression;
