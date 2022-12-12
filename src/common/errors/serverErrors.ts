export const createNoJSONFileError = (filePath: string) =>
  new Error('Error: file is no json file: ' + filePath);

export const createWrongFilePathError = (filePath: string) =>
  new Error('No such file or directory, open ' + filePath);
