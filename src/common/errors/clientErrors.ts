export function createFetchGetError(routeName: string) {
  return new Error(`ERROR: Fetch GET failed on route ${routeName}`);
}
