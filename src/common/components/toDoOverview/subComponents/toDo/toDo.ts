import { ToDo } from '../../../../types/index';
import {
  fetchDeleteToDo,
  fetchPutToDo,
} from '../../../../helpers/fetchHelpers';
import './toDo.css';

function createToDo({ id, task, isDone }: ToDo): HTMLDivElement {
  const identifier = 'to-do-' + id;
  const checkbox = document.createElement('input');

  checkbox.className = 'to-do__checkbox';
  checkbox.checked = isDone;
  checkbox.id = identifier;
  checkbox.name = identifier;
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;

    updateToDo(id, task, target.checked);
  });

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
    handleDeleteButtonClick({ id, task, isDone });
  });

  const div = document.createElement('div');

  div.className = 'to-do';
  div.id = id;
  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(deleteButton);

  return div;
}

function handleDeleteButtonClick(toDo: ToDo): void {
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
}

function updateToDo(id: string, task: string, isDone: boolean): void {
  const updatedToDo: ToDo = {
    id: id,
    task: task,
    isDone: isDone,
  };

  fetchPutToDo(updatedToDo)
    .then((response) => {
      if (response?.ok) {
        console.log(updatedToDo);
      } else {
        console.error('Put to do in frontend failed!');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default createToDo;
