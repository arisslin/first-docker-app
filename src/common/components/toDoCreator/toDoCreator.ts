import { v4 as uuidv4 } from 'uuid';
import { fetchPostToDo } from '../../helpers/fetchHelpers';
import { ToDo } from '../../types/index';
import createToDo from '../toDoOverview/subComponents/toDo/toDo';
import { toDoOverviewId } from '../toDoOverview/toDoOverview';
import './toDoCreator.css';

function createToDoCreator(url = ''): HTMLFormElement {
  const input = document.createElement('input');
  const inputId = 'to-do-creator__input';

  input.className = 'to-do-creator__input';
  input.id = inputId;
  input.name = 'create-do-do';
  input.type = 'text';

  const button = document.createElement('button');

  button.className = 'to-do-creator__button';
  button.innerText = '+';

  const form = document.createElement('form');

  form.action = url;
  form.className = 'to-do-creator';
  form.method = 'post';
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    appendToDoToOverview(input);
  });
  form.appendChild(input);
  form.appendChild(button);
  return form;
}

async function appendToDoToOverview(input: HTMLInputElement): Promise<void> {
  const toDoOverview = document.getElementById(
    toDoOverviewId
  ) as HTMLFieldSetElement | null;

  if (input.value && toDoOverview) {
    const newToDoData: ToDo = {
      id: uuidv4(),
      task: input.value,
      isDone: false,
    };

    const response = await fetchPostToDo(newToDoData);

    if (response?.ok) {
      const newToDo = createToDo(newToDoData);

      toDoOverview?.appendChild(newToDo);
    } else {
      console.error('Posting to do in frontend failed!');
    }

    input.value = '';
  }
}

export default createToDoCreator;
