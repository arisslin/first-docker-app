function createToDoCreator(handleSubmit: () => void): HTMLFormElement {
  const form = document.createElement('form');

  form.action = '';
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
