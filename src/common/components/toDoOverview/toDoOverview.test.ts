import createToDoOverview from './toDoOverview';

describe('createToDoOverview()', () => {
  it('returns undefined if there are no to dos', () => {
    expect(createToDoOverview([])).toBe(undefined);
  });
});
