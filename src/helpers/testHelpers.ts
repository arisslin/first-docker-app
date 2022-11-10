export function mockResolvedApiCall(
  answer: string | number | boolean | object
) {
  return jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(answer),
      text: () => Promise.resolve(answer),
    })
  ) as jest.Mock;
}
