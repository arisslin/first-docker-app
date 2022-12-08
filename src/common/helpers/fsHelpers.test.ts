import { readJSONFromFS } from './fsHelpers';

describe('readJSONFromFS()', () => {
  it('throws if filePath is empty', () => {
    expect.assertions(1);
    try {
      readJSONFromFS('');
    } catch (error) {
      expect(error).toBe('file path is required');
    }
  });

  it('returns data from the filesystem', async () => {
    const filePath = 'src/common/mocks/mockedTestJson.json';
    const receivedData = await readJSONFromFS(filePath);

    expect.assertions(1);
    expect(receivedData).toEqual({ test: 'Hello World!' });
  });

  it('rejects an error if path is wrong', async () => {
    const filePath = 'src/common/mocks/mockedTestJsona.json';

    expect.assertions(1);
    try {
      await readJSONFromFS(filePath);
    } catch (error) {
      expect(error).toMatch(
        'Error: no such file or directory, open ' +
          'src/common/mocks/mockedTestJsona.json'
      );
    }
  });
});
