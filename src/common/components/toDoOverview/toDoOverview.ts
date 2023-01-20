import { fetchDeleteToDo } from '../../helpers/fetchHelpers';
import { ToDo } from '../../types/index';
import createToDo, { ToDoEntry } from './subComponents/toDo/toDo';
import './toDoOverview.css';

function createToDoOverview(toDos: ToDo[]): HTMLFieldSetElement | undefined {
  const legend = document.createElement('legend');

  legend.innerText = 'To dos:';

  const fieldSet = document.createElement('fieldset');

  fieldSet.className = 'to-do-overview';
  fieldSet.id = toDoOverviewId;
  fieldSet.appendChild(legend);
  toDos.forEach((toDo) => {
    const handleDeleteButtonClick = () => {
      fetchDeleteToDo(toDo)
        .then((response) => {
          if (response?.ok) {
            const renderedToDo = document.getElementById(toDo.id);

            renderedToDo?.remove();
          } else {
            console.error('Delete to do in frontend failed!');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    const toDoEntry: ToDoEntry = { ...toDo, handleDeleteButtonClick };
    const toDoElement = createToDo(toDoEntry);

    fieldSet.appendChild(toDoElement);
  });

  return fieldSet;
}

export const toDoOverviewId = 'to-do-overview';

export default createToDoOverview;
