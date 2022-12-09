import { toDosURL } from '../constants/index';
import {
  createFetchGetError,
  createFetchPostError,
} from '../errors/clientErrors';
import { ToDo } from '../types/index';

export async function fetchGetToDos(): Promise<ToDo[]> {
  try {
    const result = await fetch(toDosURL);
    const toDos = await result.json();

    return toDos;
  } catch (error) {
    throw createFetchGetError(toDosURL);
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
    throw createFetchPostError(toDosURL);
  }
}
