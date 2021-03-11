import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((res) => {
        resolve(json(res));
        reject(new Error('Ошибка!'));
      });
    });
  }
}
