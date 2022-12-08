import { readFile } from 'fs';

export function readJSONFromFS<Type>(filePath: string): Promise<Type> {
  if (!filePath) {
    throw 'file path is required';
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
