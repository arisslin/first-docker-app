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

    const toDoOverview = document.getElementById(toDoOverviewId);
    const newToDo = createToDo({ id: 4, task: input.value, isDone: false });

    toDoOverview?.appendChild(newToDo);
    input.value = '';
  });
  form.appendChild(input);
  form.appendChild(button);

  return form;
}

export default createToDoCreator;
