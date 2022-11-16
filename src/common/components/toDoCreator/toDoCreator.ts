function createToDoCreator(
  handleSubmit: () => void,
  url = ''
): HTMLFormElement {
  const form = document.createElement('form');

  form.action = url;
  form.method = 'post';
  form.innerHTML =
    '<input type="text" name="name" id="name" /><button>Add</button>';
  form.addEventListener('submit', (element) => {
    element.preventDefault();
    handleSubmit();
  });

  return form;
}

export default createToDoCreator;
