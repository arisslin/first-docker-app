import { ToDo } from '../types/index';
import { fetchJSON } from './fetchHelpers';
import { mockResolvedApiCall } from './testHelpers';

describe('fetchJSON()', () => {
  const MOCK_API_ANSWER: ToDo[] = [
    { id: 1, task: 'Do something', isDone: true },
  ];
  const url = 'https://www.thisisatest.de/todos';

  it('retuns a fetched JSON object', async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(mockResolvedApiCall(MOCK_API_ANSWER));

    const answer = await fetchJSON(url);

    expect(answer).toEqual(MOCK_API_ANSWER);
    expect(global.fetch).toBeCalledTimes(1);
  });
});
