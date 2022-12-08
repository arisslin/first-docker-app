import { readFile } from 'fs';

export function readJSONFromFS(filePath: string) {
  if (!filePath) {
    throw 'file path is required';
  }

  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject('Error: no such file or directory, open ' + filePath);
      } else {
        const dataString = data.toString();
        const dataJSON = JSON.parse(dataString);

        resolve(dataJSON);
      }
    });
  });
}
