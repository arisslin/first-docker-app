import { toDosURL } from '../constants/index';
import {
  createFetchDeleteError,
  createFetchGetError,
  createFetchPostError,
} from '../errors/clientErrors';
import { ToDo } from '../types/index';
import { fetchDeleteToDo, fetchGetToDos, fetchPostToDo } from './fetchHelpers';

const mockedError = new Error('Test');
const mockedToDos: ToDo[] = [{ id: '1', task: 'Do something', isDone: true }];

describe('fetchGetToDos', () => {
  it('returns an array of to dos', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockedToDos),
      })
    ) as jest.Mock;
    expect.assertions(1);
    expect(await fetchGetToDos()).toEqual(mockedToDos);
  });

  it('rejects undefined', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(mockedError);
    expect.assertions(1);
    await expect(fetchGetToDos).rejects.toThrow(createFetchGetError(toDosURL));
  });
});

describe('fetchPostToDo()', () => {
  it('resolves a response', async () => {
    const mockedResponse = 'response';

    global.fetch = jest.fn(() => Promise.resolve(mockedResponse)) as jest.Mock;
    expect.assertions(1);
    expect(await fetchPostToDo(mockedToDos[0])).toBe(mockedResponse);
  });

  it('rejects an error', () => {
    global.fetch = jest.fn().mockRejectedValueOnce(mockedError);
    expect.assertions(1);

    return expect(fetchPostToDo(mockedToDos[0])).rejects.toEqual(
      createFetchPostError(toDosURL)
    );
  });
});

describe('fetchDeleteToDo()', () => {
  it('resolves a response', async () => {
    const mockedResponse = 'response';

    global.fetch = jest.fn(() => Promise.resolve(mockedResponse)) as jest.Mock;
    expect.assertions(1);
    expect(await fetchPostToDo(mockedToDos[0])).toBe(mockedResponse);
  });

  it('rejects an error', () => {
    global.fetch = jest.fn().mockRejectedValueOnce(mockedError);
    expect.assertions(1);

    return expect(fetchDeleteToDo(mockedToDos[0])).rejects.toEqual(
      createFetchDeleteError(toDosURL)
    );
  });
});
