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

export function mockRejectedApiCall(error: string) {
  return jest.fn(() =>
    Promise.resolve({
      json: () => Promise.reject(error),
    })
  ) as jest.Mock;
}
