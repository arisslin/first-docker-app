import { toDosURL } from '../constants/index';
import { ToDo } from '../types/index';

export async function fetchGetToDos(): Promise<ToDo[] | undefined> {
  try {
    const result = await fetch(toDosURL);
    const toDos = await result.json();

    return toDos;
  } catch (error) {
    console.error('ERROR: Fetch GET to dos failed!');

    return undefined;
  }
}

export async function fetchPostToDo(toDo: ToDo) {
  try {
    const response = await fetch(toDosURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toDo),
    });

    return response;
  } catch (error) {
    console.error('ERROR: Fetch POST to do failed!');

    return undefined;
  }
}
