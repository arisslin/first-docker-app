import { readFile, writeFile } from 'fs';
import { errorFilePathIsRequired } from '../errors/globalError';
import {
  createNoJSONFileError,
  createWrongFilePathError,
} from '../errors/serverErrors';

export function readJSONFromFS<Type>(filePath: string): Promise<Type> {
  if (!filePath) {
    throw errorFilePathIsRequired;
  }

  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject(createWrongFilePathError(filePath));
      }

      try {
        const dataString = data.toString();
        const dataJSON = JSON.parse(dataString);

        resolve(dataJSON);
      } catch (error) {
        reject(createNoJSONFileError(filePath));
      }
    });
  });
}

export function writeJSONToFs(
  filePath: string,
  data: string
): Promise<unknown> {
  if (!filePath) {
    throw errorFilePathIsRequired;
  }

  return new Promise((resolve, reject) => {
    writeFile(filePath, data, (error) => {
      if (error) {
        reject(error);
      } else {
        console.log('Data written to ' + filePath);
      }
    });
  });
}
