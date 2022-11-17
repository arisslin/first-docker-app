import { ToDo } from '../common/types/index';
import { fetchFrom } from '../common/helpers/fetchHelpers';
import { serverPort, serverUrl } from '../common/constants/index';
import createToDoOverview from '../common/components/toDoOverview/toDoOverview';
import createToDoCreator from '../common/components/toDoCreator/toDoCreator';

const toDosURL = `${serverUrl}:${serverPort}/todos`;

fetchFrom<ToDo[]>(toDosURL)
  .then((toDos) => {
    const mainElement = document.querySelector('main');
    const toDosOverview = createToDoOverview(toDos);

    toDosOverview && mainElement?.appendChild(toDosOverview);

    const toDoCreator = createToDoCreator();

    mainElement?.appendChild(toDoCreator);
  })
  .catch((error) => console.error(error));
