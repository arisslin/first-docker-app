import { createFetchGetError } from '../errors/clientErrors';
import { ToDo } from '../types/index';
import { fetchGetToDos, fetchPostToDo } from './fetchHelpers';

const mockedError = new Error('Test');
const mockedToDos: ToDo[] = [{ id: '1', task: 'Do something', isDone: true }];

describe('fetchGetToDos', () => {
  it('returns an array of to dos', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockedToDos),
      })
    ) as jest.Mock;

    expect(await fetchGetToDos()).toEqual(mockedToDos);
  });

  it('rejects undefined', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(mockedError);

    await expect(fetchGetToDos).rejects.toThrow(createFetchGetError('/todos'));
  });
});

describe('fetchPostToDo()', () => {
  it('resolves a response', async () => {
    const mockedResponse = 'response';

    global.fetch = jest.fn(() => Promise.resolve(mockedResponse)) as jest.Mock;

    expect(await fetchPostToDo(mockedToDos[0])).toBe(mockedResponse);
  });

  it('rejects undefined', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(mockedError);

    expect(await fetchPostToDo(mockedToDos[0])).toBe(undefined);
  });
});
