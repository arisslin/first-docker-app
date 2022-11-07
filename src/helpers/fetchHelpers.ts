import { serverUrl, serverPort } from '../constans/index';

export async function fetchStudents() {
  const response = await fetch(serverUrl + ':' + serverPort + '/students');

  if (!response.ok) {
    const message = `An error has occured. Status ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}
