import { isToDo } from './index';

describe('isToDo()', () => {
  it('returns false if it is not an object', () => {
    expect(isToDo(1)).toBe(false);
  });
});
