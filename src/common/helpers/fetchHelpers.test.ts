import { ToDo } from '../types/index';
import { fetchGetToDos } from './fetchHelpers';

describe('fetchGetToDos', () => {
  const MOCK_API_ANSWER_JSON: ToDo[] = [
    { id: '1', task: 'Do something', isDone: true },
  ];

  it('returns an array of to dos', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_API_ANSWER_JSON),
      })
    ) as jest.Mock;

    expect(await fetchGetToDos()).toEqual(MOCK_API_ANSWER_JSON);
  });

  it('rejects undefined', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Test'));

    expect(await fetchGetToDos()).toBe(undefined);
  });
});
