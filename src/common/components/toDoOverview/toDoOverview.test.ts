import { mockedToDos } from '../../mocks/mockedTodos';
import createToDoOverview from './toDoOverview';

describe('createToDoOverview()', () => {
  const element = createToDoOverview(mockedToDos);

  it('returns undefined if there are no to dos', () => {
    expect(createToDoOverview([])).toBe(undefined);
  });

  it('renders as HTMLFieldSetElement', () => {
    expect(element?.tagName).toBe('FIELDSET');
  });
});
