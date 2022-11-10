import { ToDo } from '../common/types/index';
import { fetchFrom } from '../common/helpers/fetchHelpers';
import { serverPort, serverUrl } from '../common/constants/index';
import createToDoOverview from '../common/components/toDoOverview/toDoOverview';

const toDosURL = `${serverUrl}:${serverPort}/todos`;

fetchFrom<ToDo[]>(toDosURL)
  .then((toDos) => {
    const toDosOverview = createToDoOverview(toDos);

    toDosOverview && document.querySelector('main')?.appendChild(toDosOverview);
  })
  .catch((error) => console.error(error));
