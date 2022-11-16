import createToDoCreator from './toDoCreator';

describe('createToDoCreator()', () => {
  const handleSubmit = jest.fn();
  const toDoCreator = createToDoCreator(handleSubmit);

  it('is created as HTMLFormElement with post method', () => {
    expect(toDoCreator.tagName).toBe('FORM');
    expect(toDoCreator.method).toBe('post');
  });

  it('is default action is an empty string', () => {
    expect(toDoCreator.action).toBe('http://localhost/');
  });

  it('contains a text input', () => {
    const inputElement = toDoCreator.querySelector('input');

    expect(inputElement?.type).toBe('text');
  });

  it('contains a button', () => {
    expect(toDoCreator.querySelector('button')).toBeTruthy();
  });

  it('can handle a function ob submit events', () => {
    toDoCreator.submit();

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('can handle a function ob submit events', () => {
    const url = 'http://www.test.de/';
    const toDoCreatorWithUrl = createToDoCreator(handleSubmit, url);

    expect(toDoCreatorWithUrl.action).toBe(url);
  });
});
