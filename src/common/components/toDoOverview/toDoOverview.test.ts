import { mockedToDos } from '../../mocks/mockedTodos';
import createToDoOverview from './toDoOverview';

describe('createToDoOverview()', () => {
  const element = createToDoOverview(mockedToDos);

  it('returns undefined if there are no to dos', () => {
    expect(createToDoOverview([])).toBe(undefined);
  });

  it('gets created as HTMLFieldSetElement', () => {
    expect(element?.tagName).toBe('FIELDSET');
  });

  it('creates all provided to dos', () => {
    mockedToDos.forEach((toDo) => {
      const identifier = 'to-do-' + toDo.id;

      expect(element?.querySelector(`input[name=${identifier}]`)).toBeTruthy();
      expect(element?.querySelector(`label[for=${identifier}]`)).toBeTruthy();
    });
  });
});
