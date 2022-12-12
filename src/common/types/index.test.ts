import { isToDo, ToDo } from './index';

describe('isToDo()', () => {
  const mockedToDo: ToDo = {
    id: '12345',
    task: 'Test',
    isDone: true,
  };
  const mockedAdvancedToDo = {
    id: '12345',
    task: 'Test',
    isDone: true,
    test: 1,
  };
  const mockedReducedToDo = {
    id: '12345',
    task: 'Test',
  };
  const mockedSomething = {
    test: 1,
  };

  it('returns false if it is not an object', () => {
    expect(isToDo(1)).toBe(false);
    expect(isToDo('test')).toBe(false);
    expect(isToDo(false)).toBe(false);
    expect(isToDo(undefined)).toBe(false);
    expect(isToDo(NaN)).toBe(false);
    expect(isToDo(null)).toBe(false);
    expect(isToDo([1, 2, 3])).toBe(false);
  });

  it('returns true if it is an object', () => {
    expect(isToDo(mockedToDo)).toBe(true);
  });

  it('returns false if it contains no "id"', () => {
    expect(isToDo(mockedSomething)).toBe(false);
  });

  it('returns true if it contains "id"', () => {
    expect(isToDo(mockedToDo)).toBe(true);
  });

  it('returns false if it contains no "task"', () => {
    expect(isToDo(mockedSomething)).toBe(false);
  });

  it('returns true if it contains "task"', () => {
    expect(isToDo(mockedToDo)).toBe(true);
  });

  it('returns false if it contains no "isDone"', () => {
    expect(isToDo(mockedSomething)).toBe(false);
  });

  it('returns true if it contains "isDone"', () => {
    expect(isToDo(mockedToDo)).toBe(true);
  });

  it('returns false if it contains more then 3 entries', () => {
    expect(isToDo(mockedAdvancedToDo)).toBe(false);
  });

  it('returns false if it contains less then 3 vaild entries', () => {
    expect(isToDo(mockedReducedToDo)).toBe(false);
  });
});
