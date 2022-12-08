import { readJSONFromFS } from './fsHelpers';

describe('readJSONFromFS()', () => {
  const dataPath = 'src/common/mocks/mockedTestJson.json';

  it('throws if filePath is empty', () => {
    try {
      readJSONFromFS('');
    } catch (error) {
      expect(error).toBe('file path is required');
    }
  });

  it('returns data from the filesystem', async () => {
    const receivedData = await readJSONFromFS(dataPath);

    expect(receivedData).toEqual({ test: 'Hello World!' });
  });
});
