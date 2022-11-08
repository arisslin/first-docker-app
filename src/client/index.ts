import { ToDo } from '../types/index';
import { fetchToDos } from '../helpers/fetchHelpers';

fetchToDos()
  .then((toDos: ToDo[]) => renderToDosTable(toDos))
  .catch((error) => console.error(error));

function renderToDosTable(toDos: ToDo[]): void {
  console.log(toDos);
}
