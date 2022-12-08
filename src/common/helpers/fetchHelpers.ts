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

export async function fetchToDoTo(url: string, data: ToDo) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {
    console.error('POST fetch to do failed!');

    throw error;
  }
}
