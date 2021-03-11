import GameSavingLoader from './GameSavingLoader';

console.log('worked');

GameSavingLoader.load().then((saving) => console.log(saving));
