import { toDosURL } from '../constants/index';
import {
  createFetchDeleteError,
  createFetchGetError,
  createFetchPostError,
  createFetchPutError,
} from '../errors/clientErrors';
import { ToDo } from '../types/index';

export async function fetchDeleteToDo(toDo: ToDo): Promise<Response> {
  try {
    const response = await fetch(toDosURL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toDo),
    });

    return response;
  } catch (error) {
    throw createFetchDeleteError(toDosURL);
  }
}

export async function fetchGetToDos(): Promise<ToDo[]> {
  try {
    const result = await fetch(toDosURL);
    const toDos = await result.json();

    return toDos;
  } catch (error) {
    throw createFetchGetError(toDosURL);
  }
}

export async function fetchPostToDo(toDo: ToDo): Promise<Response> {
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

export async function fetchPutToDo(toDo: ToDo): Promise<Response> {
  try {
    const response = await fetch(toDosURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toDo),
    });

    return response;
  } catch (error) {
    throw createFetchPutError(toDosURL);
  }
}
