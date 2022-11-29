import { ToDo } from '../types/index';

export async function fetchFrom<Type>(
  url: string,
  responseType: 'json' | 'text' = 'json'
): Promise<Type> {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    return (await responseType) === 'json' ? response.json() : response.text();
  } catch (error) {
    console.error('Fetch failed!');

    throw error;
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
