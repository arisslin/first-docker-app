export const createFetchDeleteError = (url: string) =>
  new Error(`Fetch DELETE failed on ${url}`);

export const createFetchGetError = (url: string) =>
  new Error(`Fetch GET failed on ${url}`);

export const createFetchPutError = (url: string) =>
  new Error(`Fetch PUT failed on ${url}`);

export const createFetchPostError = (url: string) =>
  new Error(`Fetch POST failed on ${url}`);
