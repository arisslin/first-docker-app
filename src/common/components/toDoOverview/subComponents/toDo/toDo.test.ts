import { ToDo } from '../../../../types/index';
import createToDo from './toDo';

describe('createToDo', () => {
  const toDoChecked: ToDo = {
    id: '1',
    task: 'Do something!',
    isDone: true,
  };
  const elementChecked = createToDo(toDoChecked);
  const inputChecked = elementChecked.querySelector('input');
  const idOfCheckedToDo = 'to-do-' + toDoChecked.id;

  it('is created as HTMLDivElement', () => {
    expect(elementChecked.tagName).toBe('DIV');
  });

  it('contains a checkbox with id and name', () => {
    expect(inputChecked?.type).toBe('checkbox');
    expect(inputChecked?.id).toBe(idOfCheckedToDo);
    expect(inputChecked?.name).toBe(idOfCheckedToDo);
  });

  it('sets checkbox to checked by parameter', () => {
    expect(inputChecked?.checked).toBe(toDoChecked.isDone);
  });

  it('sets checkbox to unchecked by parameter', () => {
    const toDoUnChecked: ToDo = {
      id: '1',
      task: 'Do something!',
      isDone: false,
    };
    const elementUnChecked = createToDo(toDoUnChecked);
    const inputChecked = elementUnChecked.querySelector('input');

    expect(inputChecked?.checked).toBe(toDoUnChecked.isDone);
  });

  it('contains a label with id and text', () => {
    const label = elementChecked.querySelector('label');

    expect(label?.htmlFor).toBe(idOfCheckedToDo);
    expect(label?.innerText).toBe(toDoChecked.task);
  });

  it('contains a delete button', () => {
    const button = elementChecked.querySelector('button');

    expect(button).toBeTruthy();
  });
});
