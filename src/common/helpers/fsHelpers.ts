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

export function writeJSONToFs(filePath: string, data: string): void {
  if (!filePath) {
    throw errorFilePathIsRequired;
  }

  writeFile(filePath, data, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Data written to ' + filePath);
    }
  });
}
