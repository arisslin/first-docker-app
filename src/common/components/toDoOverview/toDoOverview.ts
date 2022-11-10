import { ToDo } from '../../types/index';
import createToDo from './subComponents/toDo/toDo';

function createToDoOverview(toDos: ToDo[]): HTMLFieldSetElement | undefined {
  if (!toDos.length) {
    return undefined;
  }

  const fieldSet = document.createElement('fieldset');
  const legend = document.createElement('legend');

  legend.innerText = 'To dos:';
  fieldSet.appendChild(legend);
  toDos.forEach((toDo) => {
    const toDoElement = createToDo(toDo);
    fieldSet.appendChild(toDoElement);
  });

  return fieldSet;
}

export default createToDoOverview;
