import { ToDo } from '../types/index';
import { fetchJSON } from '../helpers/fetchHelpers';
import { serverPort, serverUrl } from '../constans/index';

const toDosURL = `${serverUrl}:${serverPort}/todos`;

fetchJSON(toDosURL)
  .then((toDos: ToDo[]) => renderToDosTable(toDos))
  .catch((error) => console.error(error));

function renderToDosTable(toDos: ToDo[]): void {
  console.log(toDos);
}
