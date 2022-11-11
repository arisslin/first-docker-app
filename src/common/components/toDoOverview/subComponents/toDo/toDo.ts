import { ToDo } from '../../../../types/index';
import './toDo.css';

function createToDo({ id, task, isDone }: ToDo): HTMLDivElement {
  const identifier = 'to-do-' + id;
  const checkbox = document.createElement('input');

  checkbox.className = 'to-do__checkbox';
  checkbox.checked = isDone;
  checkbox.id = identifier;
  checkbox.name = identifier;
  checkbox.type = 'checkbox';

  const label = document.createElement('label');

  label.className = 'to-do__label';
  label.htmlFor = identifier;
  label.innerText = task;

  const div = document.createElement('div');

  div.className = 'to-do';
  div.appendChild(checkbox);
  div.appendChild(label);

  return div;
}

export default createToDo;
