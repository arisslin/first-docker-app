import './toDoCreator.css';

function createToDoCreator(
  handleSubmit: (event?: SubmitEvent) => void,
  url = ''
): HTMLFormElement {
  const form = document.createElement('form');

  form.action = url;
  form.className = 'to-do-creator';
  form.method = 'post';
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleSubmit();
  });

  const input = document.createElement('input');

  input.className = 'to-do-creator__input';
  input.id = 'to-do-creator__input';
  input.name = 'create-do-do';
  input.type = 'text';

  const button = document.createElement('button');

  button.className = 'to-do-creator__button';
  button.innerText = '+';

  form.appendChild(input);
  form.appendChild(button);

  return form;
}

export default createToDoCreator;
