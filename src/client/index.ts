import { ToDo } from '../types/index';
import { fetchFrom } from '../helpers/fetchHelpers';
import { serverPort, serverUrl } from '../constans/index';

const toDosURL = `${serverUrl}:${serverPort}/todaos`;

fetchFrom<ToDo[]>(toDosURL)
  .then((toDos) => renderToDosTable(toDos))
  .catch((error) => console.error(error));

function renderToDosTable(toDos: ToDo[]): void {
  console.log(toDos);
}
