import { errorFilePathIsRequired } from '../errors/globalError';
import {
  createNoJSONFileError,
  createWrongFilePathError,
} from '../errors/serverErrors';
import { readJSONFromFS, writeToFs } from './fsHelpers';

describe('readJSONFromFS()', () => {
  type TestData = { test: string };

  it('throws if filePath is empty', () => {
    expect(() => readJSONFromFS<TestData>('')).toThrow(errorFilePathIsRequired);
  });

  it('returns data from the filesystem', async () => {
    const filePath = 'src/common/mocks/mockedTestJson.json';
    const receivedData = await readJSONFromFS<TestData>(filePath);

    expect.assertions(1);
    expect(receivedData).toEqual({ test: 'Hello World!' });
  });

  it('rejects an error if path is wrong', () => {
    const filePath = 'src/common/mocks/mockedTestJsona.json';

    expect.assertions(1);

    return expect(readJSONFromFS(filePath)).rejects.toEqual(
      createWrongFilePathError(filePath)
    );
  });

  it('rejects if file is no json file', async () => {
    const filePath = 'src/common/mocks/mockedText.txt';

    expect.assertions(1);

    return expect(readJSONFromFS(filePath)).rejects.toEqual(
      createNoJSONFileError(filePath)
    );
  });
});

describe('writeJSONToFs()', () => {
  const mockedData = JSON.stringify([]);

  it('throws if filePath is empty', () => {
    expect(() => writeToFs('', mockedData)).toThrow(errorFilePathIsRequired);
  });
});
