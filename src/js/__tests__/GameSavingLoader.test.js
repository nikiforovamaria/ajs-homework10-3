import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('1 - should call read once', async () => {
  const resp = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
  read.get.mockResolvedValue(resp);
  const result = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
  const game = await GameSavingLoader.load();
  expect(game).toBe(result);
});

test('2 - should call read once and return error', async () => {
  const resp = new Error('Ошибка!');
  read.get.mockImplementation(() => Promise.reject(resp));
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e).toMatch('Ошибка!');
  }
});
