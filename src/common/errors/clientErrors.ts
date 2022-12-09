export const createFetchGetError = (routeName: string) =>
  new Error(`Fetch GET failed on route ${routeName}`);
