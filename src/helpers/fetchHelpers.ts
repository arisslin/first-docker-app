import { serverUrl, serverPort } from '../constans/index';

export async function fetchToDos() {
  const response = await fetch(serverUrl + ':' + serverPort + '/todos');

  if (!response.ok) {
    const message = `An error has occured. Status ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}
