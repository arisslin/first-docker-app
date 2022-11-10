import { ToDo } from '../../types/index';

function createToDoOverview(toDos: ToDo[]): HTMLFieldSetElement | undefined {
  if (!toDos.length) {
    return undefined;
  }

  const fieldSet = document.createElement('fieldset');
  const legend = document.createElement('legend');

  legend.innerText = 'To dos:';
  fieldSet.appendChild(legend);
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
    fieldSet.appendChild(div);
  });

  return fieldSet;
}

export default createToDoOverview;
