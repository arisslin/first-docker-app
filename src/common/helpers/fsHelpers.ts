import { readFile } from 'fs';
import { errorFilePathIsRequired } from '../errors/globalError';

export function readJSONFromFS<Type>(filePath: string): Promise<Type> {
  if (!filePath) {
    throw errorFilePathIsRequired;
  }

  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject('Error: no such file or directory, open ' + filePath);
      }

      try {
        const dataString = data.toString();
        const dataJSON = JSON.parse(dataString);

        resolve(dataJSON);
      } catch (error) {
        reject('Error: file is no json file: ' + filePath);
      }
    });
  });
}
