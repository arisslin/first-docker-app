export const createFetchGetError = (routeName: string) =>
  new Error(`ERROR: Fetch GET failed on route ${routeName}`);
