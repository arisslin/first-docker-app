import { fetchDeleteToDo } from '../../helpers/fetchHelpers';
import { ToDo } from '../../types/index';
import createToDo, { ToDoEntry } from './subComponents/toDo/toDo';
import './toDoOverview.css';

function createToDoOverview(toDos: ToDo[]): HTMLFieldSetElement | undefined {
  if (!toDos.length) {
    return undefined;
  }

  const legend = document.createElement('legend');

  legend.innerText = 'To dos:';

  const fieldSet = document.createElement('fieldset');

  fieldSet.className = 'to-do-overview';
  fieldSet.id = toDoOverviewId;
  fieldSet.appendChild(legend);
  toDos.forEach((toDo) => {
    const handleDeleteButtonClick = () => {
      fetchDeleteToDo(toDo);
    };
    const toDoEntry: ToDoEntry = { ...toDo, handleDeleteButtonClick };
    const toDoElement = createToDo(toDoEntry);
    fieldSet.appendChild(toDoElement);
  });

  return fieldSet;
}

export const toDoOverviewId = 'to-do-overview';

export default createToDoOverview;
