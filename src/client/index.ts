import { ToDo } from '../types/index';
import { fetchFrom } from '../helpers/fetchHelpers';
import { serverPort, serverUrl } from '../constans/index';

const toDosURL = `${serverUrl}:${serverPort}/todos`;

fetchFrom<ToDo[]>(toDosURL)
  .then((toDos) => renderToDos(toDos))
  .catch((error) => console.error(error));

function renderToDos(toDos: ToDo[]): void {
  if (toDos.length) {
    const mainElement = document.querySelector('main');
    const toDosOverview = document.createElement('fieldset');
    const legend = document.createElement('legend');

    legend.innerText = 'To dos:';
    toDosOverview.appendChild(legend);
    toDos.forEach((toDo) => {
      const id = `to-do-${toDo.id.toString()}`;
      const checkbox = document.createElement('input');

      checkbox.type = 'checkbox';
      checkbox.id = id;
      checkbox.name = id;
      checkbox.checked = toDo.isDone;

      const label = document.createElement('label');

      label.htmlFor = id;
      label.innerText = toDo.task;

      const div = document.createElement('div');

      div.appendChild(checkbox);
      div.appendChild(label);
      toDosOverview.appendChild(div);
    });

    mainElement?.appendChild(toDosOverview);
  }
}
