export const createFetchGetError = (url: string) =>
  new Error(`Fetch GET failed on ${url}`);

export const createFetchPostError = (url: string) =>
  new Error(`Fetch POST failed on ${url}`);
