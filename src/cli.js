import readlineSync from 'readline-sync'
const userName = () => {
    console.log('Welcome to the Brain Games!')
    var Name = readlineSync.question('May I have your name? ');
console.log('Hello ' + Name + '!');

}

export default userName;

