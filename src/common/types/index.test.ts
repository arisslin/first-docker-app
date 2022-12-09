import { isToDo, ToDo } from './index';

describe('isToDo()', () => {
  const mockedToDo: ToDo = {
    id: '12345',
    task: 'Test',
    isDone: true,
  };

  it('returns false if it is not an object', () => {
    expect(isToDo(1)).toBe(false);
  });

  it('returns true if it is an object', () => {
    expect(isToDo(mockedToDo)).toBe(true);
  });
});
