import { ToDo } from '../types/index';
import { fetchFrom } from './fetchHelpers';
import { mockRejectedApiCall, mockResolvedApiCall } from './testHelpers';

describe('fetchFrom()', () => {
  const MOCK_API_ANSWER_JSON: ToDo[] = [
    { id: '1', task: 'Do something', isDone: true },
  ];
  const MOCK_API_ANSWER_TEXT = 'Hello World!';
  const MOCK_API_REJECT = 'API is down!';
  const url = 'https://www.thisisatest.de/todos';

  it('retuns a fetched JSON object', async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(mockResolvedApiCall(MOCK_API_ANSWER_JSON));

    const answer = await fetchFrom(url);

    expect(answer).toEqual(MOCK_API_ANSWER_JSON);
    expect(global.fetch).toBeCalledTimes(1);
  });

  it('retuns a fetched text', async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(mockResolvedApiCall(MOCK_API_ANSWER_TEXT));

    const answer = await fetchFrom(url, 'text');

    expect(answer).toEqual(MOCK_API_ANSWER_TEXT);
    expect(global.fetch).toBeCalledTimes(1);
  });

  it('throws on rejected fetch', async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(mockRejectedApiCall(MOCK_API_REJECT));

    try {
      await fetchFrom(url);
    } catch (error) {
      expect(error).toBe(MOCK_API_REJECT);
    }
  });
});
