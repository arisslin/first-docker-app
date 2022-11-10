import { ToDo } from '../../../../types/index';

function createToDo({ id, task, isDone }: ToDo): HTMLDivElement {
  const identifier = `to-do-${id.toString()}`;
  const checkbox = document.createElement('input');

  checkbox.type = 'checkbox';
  checkbox.id = identifier;
  checkbox.name = identifier;
  checkbox.checked = isDone;

  const label = document.createElement('label');

  label.htmlFor = identifier;
  label.innerText = task;

  const div = document.createElement('div');

  div.appendChild(checkbox);
  div.appendChild(label);

  return div;
}

export default createToDo;
