import { ToDo } from '../../../../types/index';
import './toDo.css';

export type ToDoEntry = ToDo & {
  handleDeleteButtonClick?: () => void;
};

function createToDo({
  id,
  task,
  isDone,
  handleDeleteButtonClick,
}: ToDoEntry): HTMLDivElement {
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

  const trashIcon = document.createElement('i');

  trashIcon.className = 'fa-solid fa-trash';

  const deleteButton = document.createElement('button');

  deleteButton.className = 'to-do__delete-button';
  deleteButton.appendChild(trashIcon);
  deleteButton.addEventListener('click', () => {
    handleDeleteButtonClick && handleDeleteButtonClick();
  });

  const div = document.createElement('div');

  div.className = 'to-do';
  div.id = id;
  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(deleteButton);

  return div;
}

export default createToDo;
